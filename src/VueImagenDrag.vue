<script>
export default {
  name: "VueAlertTest",
  props: {
    message: {
      type: String,
      default: "Hello World!",
    },
    timeout: {
      type: Number,
      default: 1000,
    },
  },
  mounted() {
    setTimeout(() => {
      alert(this.message);
    }, this.timeout);
  },
};
</script>
