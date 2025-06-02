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
        <button class="submit-btn" type="submit">Añadir servicio</button>
        <button class="connect-btn" type="button" @click="conectarFreighter(2)">Conectar Freighter Wallet</button>
      </form>
    </section>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const form1 = reactive({
  nombre: '',
  correo: '',
  servicio: '',
  experiencia: '',
  disponibilidad: ''
})

const form2 = reactive({
  nombre: '',
  apellido: '',
  servicio: '',
  experiencia: ''
})

function registrarServicio(numero) {
  alert(`Formulario ${numero}: Servicio registrado correctamente (simulado).`)
}

function conectarFreighter(numero) {
  alert(`Formulario ${numero}: Conectando a Freighter Wallet (simulado)...`)
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
  margin-bottom: 20px;
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
</style>
