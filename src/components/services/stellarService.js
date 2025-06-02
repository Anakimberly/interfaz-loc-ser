export async function connectFreighter() {
  if (!window.freighterApi) {
    alert("Freighter no está instalado");
    return null;
  }

  try {
    const publicKey = await window.freighterApi.getPublicKey();
    console.log("Conectado con cuenta:", publicKey);
    return publicKey;
  } catch (error) {
    console.error("Error al conectar con Freighter:", error);
    return null;
  }
}
