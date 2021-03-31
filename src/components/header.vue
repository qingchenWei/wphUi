<template>
    <div class="header">
        <i class="iconfont wph-icon-jewelry lefticon"></i>
        <h2 class="title"> WphUiPlus</h2>
        <p class="intro">基于vue3.x开发的一套ui组件库</p>
    </div>
</template>

<script>
export default {
    name: 'header',

};
</script>

<style lang="scss" scoped>
    .header {
        padding: 0 20px;
        height: 50px;
        box-shadow: 0 0 2px 0 #333;
        .lefticon {
            float: left;
            font-size: 40px;

        }
        .title {
            width: 130px;
            float: left;
            font-weight: 600;
            line-height: 50px;
        }
        .intro {
            float: right;
            width: 80%;
            line-height: 50px;
            text-align: center;
            font-size: 16px;
        }
    }
</style>