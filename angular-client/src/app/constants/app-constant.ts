export class AppConstant {
    // readonly HOME_URL: string = '';
    public static readonly HOME_URL: string = '';
    public static readonly LOGIN_URL: string = 'Login';
    public static readonly FORGOT_PASSWORD_URL: string = 'ForgotPassword';
    public static readonly FORGOT_PASSWORD_COMPLETE_URL: string = 'ForgotPasswordComplete';
    public static readonly MASTER_MANAGEMENT_URL: string = 'MasterdataManagement';
    public static readonly DASHBOARD_URL: string = 'Dashboard';
    public static readonly MY_ACCCOUNT_URL: string = 'MyAccount';
    public static readonly USER_MANAGEMENT_URL: string = 'UserManagement';
    public static readonly USERS_REG_URL: string = 'NewUsersReg';
    public static readonly GROUP_MANAGEMENT_URL: string = 'GroupManagement';
    public static readonly GROUP_NEW_URL: string = 'GroupNew';
    public static readonly GROUP_DETAILS_URL: string = 'GroupDetails/:groupName';
    public static readonly GROUP_ADD_MEMBER_URL: string = 'GroupAddMember/:groupName';
    public static readonly API_V1_URL: string = '/api/v1';
    public static readonly LOCAL_STORAGE_LOGIN_USER_KEY: string = 'loginUser';
    public static readonly EMAIL_REGEX: RegExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
}
