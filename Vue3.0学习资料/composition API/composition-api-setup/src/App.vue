<template>
  <!--  <vSetup msg="周子轩"></vSetup>-->
  <!--  <vRef></vRef>-->
  <!--  <vReactive></vReactive>-->
  <!--  <vComputed></vComputed>-->
  <!--  <vReadonly></vReadonly>-->
  <vWatchEffect></vWatchEffect>
</template>


<script>
// import vSetup from "@/components/vSetup";
// import vRef from "@/components/vRef";
// import vReactive from "@/components/vReactive";
// import vComputed from "@/components/vComputed";
// import vReadonly from "@/components/vReadonly";
import vWatchEffect from "@/components/vWatchEffect";

export default {
  name: "App",
  components: {
    // vSetup,
    // vRef,
    // vReactive,
    // vComputed,
    // vReadonly,
    vWatchEffect
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
