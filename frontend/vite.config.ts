import { defineConfig, loadEnv } from 'vite'
    // 해당 파일은 vite 빌드 도구를 설정하는 파일이다.
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd())
    //   프록시 패턴을 이용하여 해당 타겟으로 api 경로를 지정한다.
    return {
        server: {
            proxy: {
                '/api': {
                    target: env.VITE_API_URL, // 앤드포인트 설정
                    changeOrigin: true, // 요청 헤더 변경
                }
            }
        }
    }
})


