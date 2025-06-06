<template>
  <div class="container">
    <!-- Primer formulario -->
    <section>
      <h1>LOC-SERV REGISTRO</h1>
      <form @submit.prevent="registrarServicio(1)">
        <div class="name-fields">
          <input type="text" placeholder="Nombre completo" v-model="form1.nombre" required />
          <input type="email" placeholder="Correo" v-model="form1.correo" required />
        </div>
        <input type="text" placeholder="Servicio a ofrecer" v-model="form1.servicio" required />
        <input type="text" placeholder="Experiencia" v-model="form1.experiencia" required />
        <select v-model="form1.disponibilidad" required>
          <option disabled value="">Disponibilidad</option>
          <option value="dia">Día</option>
          <option value="hora">Hora</option>
        </select>
        <button class="submit-btn" type="submit">Registrarse</button>
      </form>
    </section>

    <!-- Segundo formulario -->
    <section class="espacio">
      <h1>LOC-SERV INTERCAMBIO DE SERVICIO</h1>
      <form @submit.prevent="registrarServicio(2)">
        <div class="name-fields">
          <input type="text" placeholder="Nombre completo" v-model="form2.nombre" required />
          <input type="text" placeholder="Apellido" v-model="form2.apellido" required />
        </div>
        <input type="text" placeholder="Servicio a ofrecer" v-model="form2.servicio" required />
        <input type="text" placeholder="Experiencia" v-model="form2.experiencia" required />
        <input type="text" placeholder="ID de billetera (opcional)" v-model="form2.walletId" />
        <button class="submit-btn" type="submit">Añadir servicio</button>
        <button 
          class="connect-btn" 
          type="button" 
          @click="conectarFreighter"
          :disabled="isConnecting || walletConnected"
        >
          {{ walletConnected ? 'Reconectar Freighter Wallet' : isConnecting ? 'Conectando...' : 'Conectar Freighter Wallet' }}
        </button>
      </form>
      <!-- Apartado de estado de conexión  -->
      <div v-if="walletConnected" class="connection-status">
        <p>Conectado como: {{ publicKey ? `${publicKey.slice(0, 3)}...${publicKey.slice(-4)}` : 'XXX...YYYY' }}</p>
        <p>Balance XLM: {{ balance }} XLM</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

// Estados para el primer formulario
const form1 = reactive({
  nombre: '',
  correo: '',
  servicio: '',
  experiencia: '',
  disponibilidad: ''
});

// Estados para el segundo formulario
const form2 = reactive({
  nombre: '',
  apellido: '',
  servicio: '',
  experiencia: '',
  walletId: ''
});

// Estados para la conexión 
const publicKey = ref('');
const walletConnected = ref(false);
const isConnecting = ref(false);
const balance = ref('10.00');

//  conectar Freighter
function conectarFreighter() {
  isConnecting.value = true;
  setTimeout(() => {
    publicKey.value = 'GABC1234567890XYZ'; 
    walletConnected.value = true;
    isConnecting.value = false;
  }, 1000); 
}

// Función para registrar servicios
function registrarServicio(numero) {
  if (numero === 1) {
    alert(`Formulario ${numero}: Servicio registrado correctamente .`);
    return;
  }

  if (numero === 2) {
    alert(`Formulario ${numero}: Servicio registrado correctamente (${walletConnected.value ? ' con blockchain' : ''}).`);
  }
}
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background-color: #f5f6fa;
}

.container {
  max-width: 600px;
  margin: 50px auto;
  background-color: #a4d6ff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

button.connect-btn {
  display: block;
  width: 100%;
  background-color: #318ff6;
  color: white;
  border: none;
  padding: 0.75rem;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
}

button.connect-btn:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

input,
select {
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
}

.name-fields {
  display: flex;
  gap: 10px;
}

.name-fields input {
  flex: 1;
}

button.submit-btn {
  width: 100%;
  background-color: #318ff6;
  color: black;
  border: none;
  padding: 0.75rem;
  font-size: 16px;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
}

button.submit-btn:hover {
  background-color: #e0a800;
}

.espacio {
  margin-top: 60px;
}

.connection-status {
  margin-top: 10px;
  padding: 10px;
  background-color: #e0f7fa;
  border-radius: 5px;
  text-align: center;
  font-size: 14px;
  color: #00695c;
}
</style>