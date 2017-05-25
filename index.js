//form components
import FormCheckbox from "./Forms/Elements/FormCheckbox.vue";
import FormPassword from "./Forms/Elements/FormPassword.vue";
import FormSelect from "./Forms/Elements/FormSelect.vue";
import FormSubmit from "./Forms/Elements/FormSubmit.vue";
import FormText from "./Forms/Elements/FormText.vue";
import FormTextarea from "./Forms/Elements/FormTextarea.vue";

//ui components
import FullModal from "./UI/FullModal.vue";

//global modules
import Form from "./Forms/Form";

//directives
import VForm from "./Forms/VForm";
import VFocus from "./Directives/VFocus";

export default {

    Form,

    //global app components
    components: [
        //Form Elements
        FormText,
        FormPassword,
        FormTextarea,
        FormSelect,
        FormSubmit,
        FormCheckbox,

        //UI
        FullModal,
    ],

    directives: {
        VFocus,
        VForm
    }
}