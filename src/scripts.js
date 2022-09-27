export default {
  name: "VueImagenDrag",
  props: {
    id: {
      type: String,
      default: "image-drag-drop",
    },
    height: {
      type: [String, Number],
      default: "auto",
    },
    value: {
      type: String,
      default: undefined,
    },
  },
  data() {
    return {
      resetHtml: null,
    };
  },
  methods: {
    starScript() {
      const dragArea = document.querySelector("#drag-" + this.id);
      let self = this;

      dragArea.addEventListener("dragover", (event) => {
        event.preventDefault();
        dragArea.classList.add("active");
      });

      dragArea.addEventListener("dragleave", (event) => {
        dragArea.classList.remove("active");
      });

      dragArea.addEventListener("drop", (event) => {
        event.preventDefault();
        let file = event.dataTransfer.files[0];
        self.showImage(file);
      });
    },
    fileUpload(evt) {
      const file = evt.target.files[0];
      this.showImage(file);
    },
    showImage(file) {
      const dragArea = document.querySelector("#drag-" + this.id);

      let fileType = file.type;
      let self = this;

      let validExtensions = ["image/jpg", "image/jpeg", "image/png"];

      if (validExtensions.includes(fileType)) {
        let fileReader = new FileReader();

        fileReader.onload = () => {
          let fileURL = fileReader.result;
          //console.log(fileURL);
          /*let imgTag = `<img src="${fileURL}" />`;
                    dragArea.innerHTML = imgTag;*/

          self.$emit("input", fileURL);
        };
        dragArea.classList.remove("active");
        dragArea.classList.add("no-border");
        fileReader.readAsDataURL(file);
      } else {
        dragArea.classList.remove("active");
      }
    },
    openFile() {
      document.querySelector("#" + this.id).click();
    },
    resetHmlData() {
      if (this.resetHtml) {
        const dragArea = document.querySelector("#drag-" + this.id);
        dragArea.innerHTML(this.resetHtml);
      }
    },
  },
  watch: {
    value(newValue) {
      const dragArea = document.querySelector("#drag-" + this.id);
      if (newValue) {
        this.showImage(newValue);
      } else {
        this.resetHmlData();
        dragArea.classList.remove("no-border");
      }
    },
  },
  mounted() {
    this.starScript();

    setTimeout(() => {
      if (this.value) {
        this.showImage(this.value);
      } else {
        this.resetHmlData();
      }
    }, 300);
  },
};
