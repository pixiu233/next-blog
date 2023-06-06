import { exec } from 'child_process';


/**服务器自动化部署（使用pm2运行pnpm dev开发服务器，有新代码会自动重构，所以只需要git pull即可自动部署了） */
const CI_CD = async (req, res) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { headers, body, query } = req
            console.log('——————————接收到GitHub请求，header为', headers, '\nbody为', body, '\nquery为', query);
            exec('git pull && npm i', (err, stdout, stderr) => {
                //`标准输出stdout为${stdout}`, `错误对象err为${JSON.stringify(err)}`, `标准错误stderr为${stderr}`
                console.log('err为\n,', err, 'stdout为', stdout, '\nstderr为', stderr, '\nlogArr为', logArr);
                if (err) {
                    console.log(err, stderr);//执行命令失败
                } else {
                    console.log(stdout)//执行命令成功，stdout为标准输出
                }
                res.status(200).json({
                    success: true,
                    err, stdout, stderr
                }) //返回数据
            });
        } catch (error) {
            console.log('error', error);
            res.send({ success: false, errMeg: error?.message || error || '系统错误' })
        }
    })
}

export default CI_CD