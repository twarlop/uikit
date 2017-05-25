<template>

	<div class="uk-modal-full" uk-modal ref="modal">
		<div class="uk-modal-dialog">
			<button class="uk-modal-close-full uk-close-large" type="button" uk-close></button>
			<div class="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle" uk-grid uk-height-viewport>
				<div class="uk-padding-large uk-align-center">

					<slot>

						Insert content in the default slot

					</slot>

				</div>
			</div>
		</div>
	</div>


</template>


<script>

	import Vue from "vue";

	export default Vue.component('full-modal', {

	    data()
	    {
	        return {

	        }
	    },

	    methods: {
	        modal()
	        {
	            return UIkit.modal(this.$refs.modal);
	        }
	    },

	    mounted()
	    {
	        this.modal().show();

            $(this.$refs.modal).on('hide', () => {
                this.$emit('hide');
            });
        },

	})

</script>