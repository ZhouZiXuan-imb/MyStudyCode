<template>
  <div class="box">
    <adminHeader></adminHeader>
    <adminBootom></adminBootom>
    <adminLeft></adminLeft>
    <adminRight></adminRight>
  </div>
</template>

<script>
import adminHeader from "./components/adminHeader";
import adminBootom from "./components/adminBootom";
import adminLeft from "./components/adminLeft";
import adminRight from "./components/adminRight";

export default {
  name: "App",
  components: {
    adminHeader,
    adminBootom,
    adminLeft,
    adminRight
  }
};
</script>

<style>
.box {
  width: 100%;
  height: 100%;
}
</style>
