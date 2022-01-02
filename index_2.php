<!DOCTYPE html>
<html lang="ja">
<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=0.3">
    <title>水咲の集計ページ</title>
    <link rel="stylesheet" href="css/pc/common.css"/>
</head>
<body>    
    <main>
        <div style = "margin-top: 50px;text-align: center;">
            <p style = "text-align: center; font-size: 30px; color: black;" >
            <form action=".php" method="post">
                <button type = "button" name = "calc">更新</button>
            </form>
            実現できるかわからないんだけど、更新を押したら下にRT数の表が出るようなページを作ろうと思ってます。<br>
            このページは日に日にパワーアップさせるので、叱咤激励してください。
            </p>
            <div class = table style = "display: flex; align-items: center; justify-content: center">
                <table border="1" width="1000" cellspacing="0" cellpadding="5" bordercolor="#333333">
                    <tr>
                    <th bgcolor="#EE0000" width="250"><font color="#FFFFFF">名前</font></th>
                    <th bgcolor="#EE0000" width="250"><font color="#FFFFFF">合計pt</font></th>
                    <th bgcolor="#EE0000" width="250"><font color="#FFFFFF">RTpt</font></th>
                    </tr>
                </table>
            </div>
            <br>
            <p style = "text-align: center; font-size: 30px; color: black;">
            </p>


    </main>
    <script src="js/lib/jquery-3.4.1.min.js"></script>
    <script src="js/lib/jquery-ui-1.10.3.custom.min.js"></script>
    <script>
</body>
</html>
