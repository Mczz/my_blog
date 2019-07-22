<template>

    <div class="gbox">
      <form action="../../enews/index.php" method="post" name="form1" id="form1">
        <p>
          <strong>来说点儿什么吧...</strong>
        </p>
        <p>
          <span>您的姓名:</span>
          <input name="name" type="text" id="name" />
          *
        </p>
        <p>
          <span>联系邮箱:</span>
          <input name="email" type="text" id="email" />
          *
        </p>
        <p>
          <span class="tnr">留言内容:</span>
          <textarea name="lytext" cols="60" rows="12" id="lytext"></textarea>
        </p>
        <p>
          <input type="submit" name="Submit3" value="提交" />
        </p>
      </form>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import '@/assets/css/liuyan.scss'
</style>
