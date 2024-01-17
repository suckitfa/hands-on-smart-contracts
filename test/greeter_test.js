/*
 * @Author: GuangyuanTang 254202042@qq.com
 * @Date: 2024-01-17 10:55:29
 * @LastEditors: GuangyuanTang 254202042@qq.com
 * @LastEditTime: 2024-01-17 13:13:32
 * @FilePath: \greeter\test\greeter_test.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const GreeterContract = artifacts.require("Greeter");
contract("Greeter", () => { 
    it("has been deployed successfully", async () => { 
        const greeter = await GreeterContract.deployed();
        assert(greeter, "contract was not deployed"); 
    });
    it('return "Hello,World!"', async () => {
        const greeter = await GreeterContract.deployed()
        const expected = 'Hello, World!'
        const acutal = await greeter.greet()
        assert.equal(acutal, expected, "greeted with 'Hello, World!'")
    })
});