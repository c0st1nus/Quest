use jsonwebtoken::{encode, Header, EncodingKey};
use serde::{Serialize, Deserialize};


#[derive(Serialize, Deserialize)]
struct Claims {
    sub: String,
    exp: usize,
}

#[tauri::command]
fn login_user(login: String, password: String) -> (bool, String) {
    if (login == "admin" || login == "Vic_Kor") && (password == "admin" || password == "1234") {
        let user_id = "user_id".to_string();
        let claims = Claims { sub: user_id, exp: 10000000000 };
        let token = encode(&Header::default(), &claims, &EncodingKey::from_secret(b"your_secret_key")).unwrap();
        return (true, token);
    }
    else {
        return (false, "".to_string());
    }
}


#[tauri::command]
fn get_user_id(token: String) -> String {
    use jsonwebtoken::{decode, Validation, DecodingKey};

    let token_data = decode::<Claims>(&token, &DecodingKey::from_secret(b"your_secret_key"), &Validation::default())
        .map_err(|e| e.to_string()).unwrap();

    let user_id = token_data.claims.sub;
    return user_id;
}

#[tauri::command]
fn get_step(token: String) -> String {
    use jsonwebtoken::{decode, Validation, DecodingKey};

    let token_data = decode::<Claims>(&token, &DecodingKey::from_secret(b"your_secret_key"), &Validation::default())
        .map_err(|e| e.to_string()).unwrap();

    let user_step = token_data.claims.sub;
    return user_step;
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![login_user, get_user_id, get_step])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
