<template>
    <div>
        <div class="footer">
            <div class="footerTitle">
                <a href="/active/privacy.html">隐私政策</a>
                <i></i>
                <a href="/active/cookies.html">关于Cookie</a>
            </div>
            <div class="footerContent">
                <a>2012-2020 深圳市努比亚信息技术有限公司 版权所有</a>
                <p><a href="http://beian.miit.gov.cn/">粤ICP备18069660号</a>
                    <i></i>
                    <a>ICP经营许可证编号：粤B2-20120688</a>
                </p>
                <a class="ygw">粤公网安备 44030502000309号</a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.footer {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: normal!important;
    border-top: none!important;
    box-sizing: border-box;
    a {
        display: inline-block;
        color: #999999!important;
    }
    i {
        margin: 0 10px;
        display: inline-block;
        height: 12px;
        border-right: 1px solid rgb(153,153,153);
    }
    .footerTitle {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-top: 32px;
        padding: 0 16px;
        box-sizing: border-box;
        a {
            font-size: 12px;
            line-height: 12px;
            color: rgb(50,50,50)!important;
        }
    }
    .footerContent {
        line-height: 28px;
        padding: 16px 16px 64px 16px;
        text-align: left;
        width: 100%;
        box-sizing: border-box;
        a {
            font-size: 12px;
        }
        p {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            height: 12px;
            margin: 0!important;
            a {
                white-space: nowrap;
            }
            a:last-child {
                position: relative;
            }
        }
    }
}
</style>
