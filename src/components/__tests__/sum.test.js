import { sum } from "../sum";
test("sum function should calculate the sum of two numbers", ()=>{
    const result=sum(4,2);
    expect(result).toBe(6);
});