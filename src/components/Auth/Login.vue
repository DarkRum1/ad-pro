<template> 
	<v-container fluid fill-height>
		<v-layout align-center justify-center> 
			<v-flex xs12 sm8 md8>
				<v-card class="elevation-12">
					<v-toolbar dark color="primary">
						<v-toolbar-title>Login
</v-toolbar-title>
					</v-toolbar>
					<v-card-text>
					<v-form v-model="valid" ref="form"
                    validation>
						<v-text-field
							prepend-icon="mdi-account" 
							name="email" 
							label="Email" 
							type="email" 
							v-model="email"
							:rules="emailRules" >
						</v-text-field>
						<v-text-field  
							prepend-icon="mdi-lock" 
							name="password" 
							label="Password" 
							type="password" 
							v-model="password" 
							:rules="passwordRules"
						></v-text-field>
						</v-form> 
					</v-card-text>
					<v-card-actions>
						<v-spacer></v-spacer>
            <v-btn
                color="primary"
                @click="onSubmit()"
                :loading="loading"
                :disabled="!valid || loading">
              Login
            </v-btn>

          </v-card-actions>
				</v-card>
			</v-flex>
      <template v-if="error">
      <v-snackbar
          :timeout="5000"
          :multi-line="true"
          color="error"
          @input="closeError"
          :value="true"
      >
        {{ error }}
        <v-btn text dark @click.native="closeError">Close</v-btn>
      </v-snackbar>
      </template>
    </v-layout>
	</v-container>
</template>

<script>
	
export default {
  data() {
    return {
      email: "",
      password: "",
      valid: false,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      passwordRules: [
        v => !!v || 'Name is required',
        v => (v && v.length >= 6) || 'Password must be more or equal than 6 characters',
      ]
    }
  },
  computed: {
    loading() {
      return this.$store.getters.loading
    },
    error () {
      return this.$store.getters.error
    }
  },
  methods: {
    onSubmit() {
      if (this.$refs.form.validate()) {
        const user = {
          email: this.email,
          password: this.password
        }
        this.$store.dispatch('loginUser', user)
            .then(() => {
              this.$router.push("/")
            })
            .catch((err) => {
              console.log(err.message)
            })
      }
    },
    closeError () {
      this.$store.dispatch('clearError')
    }
  },

}

</script>
