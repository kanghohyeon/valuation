import {Button, Form, Input} from "antd";
import FormItem from "antd/es/form/FormItem";
import axios from "axios"

function LoginPage(){

    const login = async ()=>{
        try{
            const res =await axios.post("api/login");
            console.log(res.data);
        }catch (e) {
            console.log(e)
        }

    }
    const register = () =>{
    }

    return <>
            <div>
                <h2>로그인</h2>
                <Form layout={"horizontal"} labelCol={{span:6}} wrapperCol={{span:18}}>
                    <FormItem label={"아이디"} name={"userName"} rules={[{required:true}]}>
                        <Input></Input>
                    </FormItem>
                    <FormItem label={"패스워드"} name={"userName"} rules={[{required:true}]}>
                        <Input type={"password"}></Input>
                    </FormItem>
                </Form>
                <Button onClick={login}>로그인</Button>
                <Button onClick={register}>회원가입</Button>
            </div>
   </>
}
export default LoginPage




