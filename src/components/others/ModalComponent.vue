<template>
  <main>
    <div class="modal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title fw-bold">{{ modaltitle }}</h5>
          <button
            @click="cancel"
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p>{{ modalbody }}</p>
        </div>
        <div class="modal-footer">
          <button
            @click="process"
            type="button"
            class="btn btn-danger fw-bold"
            data-bs-dismiss="modal"
          >
            {{ modalcancel }}
          </button>
          <button type="button" @click="cancel" class="btn btn-primary fw-bold">
            {{ modalconsent }}
          </button>
        </div>
      </div>
    </div>
    </div>
    <div class="overlay">
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      show:false
    }
  },
  methods:{
    cancel(){
      this.$emit('cancel')
    },
    process(){
      this.$emit('process')
      this.cancel()
    }
  },
  props: {
    modaltitle: {
      type: String,
      default: "Warning !!!",
    },
    modalbody: {
      type: String,
      default: "Are you sure about that ?",
    },
    modalcancel: {
      type: String,
      default: "Yes",
    },
    modalconsent: {
      type: String,
      default: "No",
    },
  },
};
</script>
<style scoped>
.modal {
  display: block;
  position: fixed;
  left: 50%;
  transform: translate(-50%,-30%);
  top: 50%;
  z-index: 2001;
}
.overlay {
  background-color: rgba(3,3,3,0.2);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2000;
}
</style>
