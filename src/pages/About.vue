<template>
    <div class="personinfo">
        <div class=" animated bounceInDown">
            <h3>个人信息</h3>
            <div>任职前端工程师。</div>
            <h3>联系方式</h3>
            <ul class="contact">
                <li><span class="info-cu">github:</span><a href="https://github.com/silif" target="blank">silif</a></li>
                <li><span  class="info-cu">邮箱:</span>dongyang233@gmail.com</li>
                <li><span  class="info-cu">微信:</span>dong_299</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
  name: 'about'
}
</script>
<style>
.contact{
    width: 240px;
    margin: auto;
    text-align: left;
}
.info-cu{
    width: 3em;
    display: inline-block;
    text-align:justify;
    overflow:hidden;
    white-space: nowrap;
    vertical-align: middle;
    text-align-last:center;
}
</style>
