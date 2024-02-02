interface JenkinsHelperOptions{
    /** 用户名  */
     userName:string
     /** 用户 token */
     userToken:string
     /** 作业名 */
     jobName:string
      /** 作业 token */
     jobToken:string
}
export class JenkinsHelper{
    private jenkinsServer:string
    private options:JenkinsHelperOptions
    constructor(jenkinsServer:string,options:JenkinsHelperOptions){
        this.jenkinsServer = jenkinsServer
        this.options = options
    }

}