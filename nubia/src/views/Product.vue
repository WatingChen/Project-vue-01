<template>
    <div>
        product
        {{product_id}}
    </div>
</template>
<script>
export default {
    data () {
        return {
            product_id:''
        }
    },
    mounted() {
        // console.log(this.$route.params.id)
        this.product_id = this.$route.params.id
    }
}
</script>
