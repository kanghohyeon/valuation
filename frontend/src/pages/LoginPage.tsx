import {Button, Form, Input } from "antd";
import {type InputRef} from "antd";
import FormItem from "antd/es/form/FormItem";
import {useEffect, useRef, useState } from "react";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

function LoginPage(){

    // 아이디 인풋에 포커스를 넣어주기 위해 돔 요소를 담을 ref
    const inputRef = useRef<InputRef>(null);
    const [val, setVal] = useState<string>('');
    // 화면 이동 시켜줄 훅
    const navigate = useNavigate();

    useEffect(()=>{
        if(inputRef.current){
            inputRef.current.focus();
        }
    },[])
    useEffect(()=>{
        console.log(val);
    })

    const login = async ()=>{
        // 추후 로그인 로직 구현 - 기본 틀 개발 후 유저 정보가 필요한 화면이 생기기 전 구현
        // try{
        //     const res = await useAxios.post("/api/login");
        //     if(res.code==200){
        //         navigate("/home");
        //     }else if (res.code == 400){
        //         toast.error("잘못된 접근입니다.");
        //     }
        // }catch (error:unknown) {
        //     if(error instanceof Error) {
        //         toast.error(error.message);
        //     }
        // }
        toast.success("전은우는 올챙이입니다.");
        navigate("/home");
    }
    const setId=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setVal(e.target.value);
    };
    const register = () =>{
    }

    return <>
            <div>
                <h2>로그인</h2>
                <Form layout={"horizontal"} labelCol={{span:6}} wrapperCol={{span:18}}>
                    <FormItem label={"아이디"} name={"userName"} rules={[{required:true}]}>
                        <Input ref={inputRef} value={val} onChange={setId}></Input>
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




