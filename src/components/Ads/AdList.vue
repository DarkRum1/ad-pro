<template> 
<v-container>
<v-layout row> 
<v-flex xs12 sm6 offset-sm3>
	<h1 class="text--secondary mb-6 mt-3">My ads</h1>
    <v-card>
<v-layout row>
        <v-flex xs4>
        </v-flex>
		<v-flex xs8>
</v-flex>
	</v-layout>
</v-card> 
<v-card 
class="elevation-10 mb-5"
v-for="ad in myAds"
:key="ad.id"
>
<v-layout row>
	<v-flex xs4 class="pl-3">
		<v-img
        :src="ad.src"
		height="175px"
		></v-img>	
	</v-flex>
	<v-flex xs8 class="pr-3">
		<v-card-text>
        <h2 class="text--primary">{{ad.title}}</h2>
        <p>{{ad.desc}}</p>
		</v-card-text>
		<v-card-actions>
		<v-spacer></v-spacer>
		<v-btn 
		color="primary"
        :to="'/ad/' + ad.id"
        >
			Open
		</v-btn>
		</v-card-actions>	
	</v-flex>
</v-layout>
</v-card>
</v-flex>
</v-layout>
</v-container>
</template>


<script>
export default {
        computed: {
        myAds(){
        return this.$store.getters.myAds
        }
    }
} 
</script>
