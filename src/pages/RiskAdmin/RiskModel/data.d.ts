export interface RiskModelTableListItem {
    id: number;
    label:string;
    status:number;
    entityName:string;
    entryName:string;
    guid:string;
    referenceDate:string;
    code:string;
    fieldValidate:boolean;
    template:boolean;
    modelName:string;
    dashboardUrl:string;
    createTime:Date;
    updateTime:Date;
}