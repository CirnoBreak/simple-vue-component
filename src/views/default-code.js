const code = `
  <template>
    <div>
      <input v-model="message">
      {{ message }}
    </div>
  </template>
  <script>
    export default {
      data () {
        return {
          message: 'hello hi'
        }
      }
    }
  </script>
`;

export default code;