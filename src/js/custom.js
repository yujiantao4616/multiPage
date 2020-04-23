//正式环境
// var apiapproval = "/tianbao/approval";//审批
// var apidemand = "/tianbao/demand";//需求
// var apiadmin = "/tianbao/admin";//admin
// var apitask = "/tianbao/task"//设置任务 -> 线上
// var apifile = "/tianbao/zuul/file";//文件
// var apidesk = "/tianbao/taskjob";//我的工作台
// var apiLog = "/tianbao/log";//我的工作台
// var apitaskjobclient = "/tianbao/taskjobclient";//用户服务
// var diagramUrl = "/dam/res/diagram-viewer/index.html";

// 120-测试
// var apiapproval = "http://192.168.202.40/approval";//审批
// var apidemand = "http://192.168.202.40/demand";//需求
// var apiadmin = "http://192.168.202.105:9098";//admin
// var apitask = "http://192.168.202.40/task"//设置任务 -> 线上
// var apifile = "http://192.168.202.40/zuul/file";//文件
// var apidesk = "http://192.168.202.40/taskjob";//我的工作台
// var apiLog = "http://192.168.202.40/log";//日志
// var apitaskjobclient = "http://192.168.202.40/taskjobclient";//用户服务
// var diagramUrl = "http://192.168.202.120/dam/res/diagram-viewer/index.html";
//  吕涛本地 192.168.20.158
// 开发
//const PORTURL = 'http://192.168.202.120/dataprocessing'; //测试服务器
const PORTURL = 'http://192.168.202.102:8082/dataprocessing'; //开发服务器
//const PORTURL = 'http://192.168.37.89:8081/dataprocessing'; //翟志斌开发服务器
//const PORTURL = 'http://192.168.38.164:8081';
// const PORTURL = 'http://192.168.20.158:8081'; //吕涛本地服务器
//const PORTURL = 'http://192.168.202.119:8081'; //数据治理检查服务器
const frame_Attr_Url = "/web/core/frameAttr"; //框架属性接口URL前缀
const index_Attr_Url = "/web/core/indexAttr"; //指标属性接口URL前缀
const dimension_Template_Url = "/web/core/dimensionTemplate"; //维度模版接口URL前缀
const data_Base_Url = "/web/core/dataBase"; //数据库接口URL前缀
const dimension_Url = "/web/core/dimension"; //维度接口URL前缀
const frame_Url = "/web/core/frame"; //框架接口URL前缀
const frame_Apply_Url = "/web/approval/frameApply"; //框架申请接口URL前缀
const index_Apply_Url = "/web/approval/indexApply"; //指标申请接口URL前缀
const frame_Index_Url = "/web/core/frameIndex"; //框架指标管理接口URL前缀
const index_Data_Url = "/web/data/indexData"; //指标数据接口URL前缀
const index_Data_Apply_Url = "/web/approval/indexDataApply"; //指标数据申请接口URL前缀
const index_Task_Url = "/web/approval/indexTask"; //指标任务接口URL前缀

const index_Url = "/web/core/index"; //指标接口URL前缀
const work_Group_Url = "/web/setting"; //工作组操作接口URL前缀
//const group_Member_Url = "/web/groupMember"; //组员操作接口URL前缀
const group_Tree_Url = "/web/core/tree"; //结构树接口URL前缀
const index_Ext_Url = "/web/core/indexExt"; //移交、分配接口URL前缀
const frame_Audit_Url = "/web/approval/frameAudit"; //框架审核接口URL前缀
const data_Audit_Url = "/web/setting/indexDataAudit"; //数据审核接口URL前缀
const bin_Log = "/web/core/binlog"; //binlog监控接口URL前缀
const import_Excel = "/web/approval/excelImportEvent/importExcelApply"; //批量导入
const import_Event_Url = "/web/approval/excelImportEvent"; //批量导入前缀URL
const import_Log_Url = "/web/approval/excelImportLog"; //批量导入明细前缀URL
const my_Approval_Url = "/web/approval/myApproval"; //审核统计数量前缀URL
const index_Audit = "/web/approval/indexAudit"; //指标审核前缀URl
const core_Url = "/web/core"; //core接口URL前缀
const set_Province_Url = '/web/setting/province'; //省份海关代码前缀URl
const set_Customs_Url = '/web/setting/customs'; //关别海关代码前缀URl
const set_Breed_Url = '/web/setting/breed'; //品种海关代码前缀URl
const set_Trade_Url = '/web/setting/trade'; //贸易方式海关代码前缀URl
const set_Country_Url = '/web/setting/country'; //国家海关代码前缀URl
const set_CustomsIndex_Url = '/web/setting/customsIndex'; //海关指标管理前缀URl