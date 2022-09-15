
const axios = require("axios");

const RESPONSES = {
    "INVALID_PWD": {
        "status":"warning",
        "msg": "La contraseña debe tener entre 8 y 30 carácteres. Contener mayúsculas, minúsculas y números, y no contener espacios"
    },
    "ERROR_CHECKING_VALID_PWD": {
        "status":"error",
        "msg": "Error en el servidor. Intentalo de nuevo mas tarde"
    },
    "INVALID_USER": {
        "status":"warning",
        "msg": "El usuario debe tener entre 8 y 30 carácteres"
    },
    "ERROR_CHECKING_VALID_USER": {
        "status":"error",
        "msg": "Error en el servidor. Intentalo de nuevo mas tarde"
    },
    "INVALID_ONE_SOCIAL_MINIMAL": {
        "status":"warning",
        "msg": "Debes completar un medio de contacto como mínimo"
    },
    "INVALID_FACEBOOK": {
        "status":"warning",
        "msg": "Facebook inválido. Debes poner la URL completa de tu perfil"
    },
    "INVALID_INSTAGRAM": {
        "status":"warning",
        "msg": "Instagram inválido. Debes poner la URL completa de tu perfil"
    },
    "INVALID_WHATSAPP": {
        "status":"warning",
        "msg": "Whatsapp inválido"
    },
    "INVALID_EMAIL": {
        "status":"warning",
        "msg": "Email inválido"
    },
    "ERROR_CHECKING_VALID_EMAIL": {
        "status":"error",
        "msg": "Error en el servidor. Intentalo de nuevo mas tarde"
    },
    "ALREADY_USED_EMAIL": {
        "status":"warning",
        "msg": "El email ya se encuentra en uso. Intenta con otro distinto"
    },
    "ERROR_CHECKING_USED_EMAIL": {
        "status":"error",
        "msg": "Error en el servidor. Intentalo de nuevo mas tarde"
    },
    "ALREADY_USED_USER": {
        "status":"error",
        "msg": "El usuario ya se encuentra en uso. Intenta con otro distinto"
    },
    "ERROR_CHECKING_USED_USER": {
        "status":"error",
        "msg": "Error en el servidor. Intentalo de nuevo mas tarde"
    },
    "ERROR_CREATING_USER": {
        "status":"error",
        "msg": "Error en el servidor. Intentalo de nuevo mas tarde"
    },
    "ERROR_SENDING_EMAIL_TO_USERS_TO_VALIDATE": {
        "status":"error",
        "msg": "Error en el servidor. Intentalo de nuevo mas tarde"
    },
    "USER_CREATED": {
        "status":"success",
        "msg": "Usuario creado correctamente. Revisa tu casilla de email para validar tu cuenta"
    }
}

export function registerAPI(nombre, apellido, numTarjeta, dni, fechaExp, codSeguridad){

    return new Promise((resolve, reject) => {
        axios.post("http://127.0.0.1:5000/create", {
            number: numTarjeta,
            balance: 0,
            name: nombre,
            surname: apellido,
            dni: parseInt(dni),
            valid_from: codSeguridad,
            valid_until: fechaExp
        })
        .then((resp) => {
            console.log(resp);
            resolve(RESPONSES[resp.data.msg]);
        })
        .catch((error) => {
            reject(RESPONSES[error.response.data.msg]);
        });
    })

}