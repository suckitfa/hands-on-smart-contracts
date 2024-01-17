/*
 * @Author: GuangyuanTang 254202042@qq.com
 * @Date: 2024-01-17 10:55:29
 * @LastEditors: GuangyuanTang 254202042@qq.com
 * @LastEditTime: 2024-01-17 13:34:59
 * @FilePath: \greeter\test\greeter_test.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const GreeterContract = artifacts.require("Greeter");
contract("Greeter", () => {
 it("has been deployed successfully", async () => {
 const greeter = await GreeterContract.deployed();
 assert(greeter, "contract failed to deploy");
 });
 describe("greet()", () => {
 it("returns 'Hello, World!'", async () => {
 const greeter = await GreeterContract.deployed();
 const expected = "Hello, World!";
 const actual = await greeter.greet();
 assert.equal(actual, expected, "greeted with 'Hello, World!'");
 });
 });
});
contract("Greeter: update greeting", () => {
 describe("setGreeting(string)", () => {
 it("sets greeting to passed in string", async () => {
 const greeter = await GreeterContract.deployed()
 const expected = "Hi there!";
 await greeter.setGreeting(expected);
 const actual = await greeter.greet();
 assert.equal(actual, expected, "greeting was not updated");
 });
 });