import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { RequestOptions } from '@angular/http';
import { ApiConfig } from '../app/api.config'
@Injectable()
export class ClientApi {

    constructor(public http: Http) {

    }


    public addclient(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'client/addclient';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('client/addclient', data, res)) {
                    if (showLoadingModal) {
                        ApiConfig.DimissLoadingModal();
                    }
                    if (res==null) {
                        return null;
                    }
                    return res.json();
                } else {
                    return Promise.reject(res);
                }
            })
            .catch(err => {
                if (showLoadingModal) {
                    ApiConfig.DimissLoadingModal();
                }
                return ApiConfig.ErrorHandle('client/addclient', data, err);
            });
    }


    public addcontract(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'client/addcontract';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('client/addcontract', data, res)) {
                    if (showLoadingModal) {
                        ApiConfig.DimissLoadingModal();
                    }
                    if (res==null) {
                        return null;
                    }
                    return res.json();
                } else {
                    return Promise.reject(res);
                }
            })
            .catch(err => {
                if (showLoadingModal) {
                    ApiConfig.DimissLoadingModal();
                }
                return ApiConfig.ErrorHandle('client/addcontract', data, err);
            });
    }


    public addcontracttemp(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'client/addcontracttemp';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('client/addcontracttemp', data, res)) {
                    if (showLoadingModal) {
                        ApiConfig.DimissLoadingModal();
                    }
                    if (res==null) {
                        return null;
                    }
                    return res.json();
                } else {
                    return Promise.reject(res);
                }
            })
            .catch(err => {
                if (showLoadingModal) {
                    ApiConfig.DimissLoadingModal();
                }
                return ApiConfig.ErrorHandle('client/addcontracttemp', data, err);
            });
    }


    public addhouxuan(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'client/addhouxuan';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('client/addhouxuan', data, res)) {
                    if (showLoadingModal) {
                        ApiConfig.DimissLoadingModal();
                    }
                    if (res==null) {
                        return null;
                    }
                    return res.json();
                } else {
                    return Promise.reject(res);
                }
            })
            .catch(err => {
                if (showLoadingModal) {
                    ApiConfig.DimissLoadingModal();
                }
                return ApiConfig.ErrorHandle('client/addhouxuan', data, err);
            });
    }


    public clientdetail(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'client/clientdetail';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('client/clientdetail', data, res)) {
                    if (showLoadingModal) {
                        ApiConfig.DimissLoadingModal();
                    }
                    if (res==null) {
                        return null;
                    }
                    return res.json();
                } else {
                    return Promise.reject(res);
                }
            })
            .catch(err => {
                if (showLoadingModal) {
                    ApiConfig.DimissLoadingModal();
                }
                return ApiConfig.ErrorHandle('client/clientdetail', data, err);
            });
    }


    public clienthuman(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'client/clienthuman';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('client/clienthuman', data, res)) {
                    if (showLoadingModal) {
                        ApiConfig.DimissLoadingModal();
                    }
                    if (res==null) {
                        return null;
                    }
                    return res.json();
                } else {
                    return Promise.reject(res);
                }
            })
            .catch(err => {
                if (showLoadingModal) {
                    ApiConfig.DimissLoadingModal();
                }
                return ApiConfig.ErrorHandle('client/clienthuman', data, err);
            });
    }


    public clientlist(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'client/clientlist';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('client/clientlist', data, res)) {
                    if (showLoadingModal) {
                        ApiConfig.DimissLoadingModal();
                    }
                    if (res==null) {
                        return null;
                    }
                    return res.json();
                } else {
                    return Promise.reject(res);
                }
            })
            .catch(err => {
                if (showLoadingModal) {
                    ApiConfig.DimissLoadingModal();
                }
                return ApiConfig.ErrorHandle('client/clientlist', data, err);
            });
    }


    public contractdetail(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'client/contractdetail';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('client/contractdetail', data, res)) {
                    if (showLoadingModal) {
                        ApiConfig.DimissLoadingModal();
                    }
                    if (res==null) {
                        return null;
                    }
                    return res.json();
                } else {
                    return Promise.reject(res);
                }
            })
            .catch(err => {
                if (showLoadingModal) {
                    ApiConfig.DimissLoadingModal();
                }
                return ApiConfig.ErrorHandle('client/contractdetail', data, err);
            });
    }


    public contractdetail2(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'client/contractdetail2';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('client/contractdetail2', data, res)) {
                    if (showLoadingModal) {
                        ApiConfig.DimissLoadingModal();
                    }
                    if (res==null) {
                        return null;
                    }
                    return res.json();
                } else {
                    return Promise.reject(res);
                }
            })
            .catch(err => {
                if (showLoadingModal) {
                    ApiConfig.DimissLoadingModal();
                }
                return ApiConfig.ErrorHandle('client/contractdetail2', data, err);
            });
    }


    public contractlist(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'client/contractlist';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('client/contractlist', data, res)) {
                    if (showLoadingModal) {
                        ApiConfig.DimissLoadingModal();
                    }
                    if (res==null) {
                        return null;
                    }
                    return res.json();
                } else {
                    return Promise.reject(res);
                }
            })
            .catch(err => {
                if (showLoadingModal) {
                    ApiConfig.DimissLoadingModal();
                }
                return ApiConfig.ErrorHandle('client/contractlist', data, err);
            });
    }


    public contracttempdetail(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'client/contracttempdetail';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('client/contracttempdetail', data, res)) {
                    if (showLoadingModal) {
                        ApiConfig.DimissLoadingModal();
                    }
                    if (res==null) {
                        return null;
                    }
                    return res.json();
                } else {
                    return Promise.reject(res);
                }
            })
            .catch(err => {
                if (showLoadingModal) {
                    ApiConfig.DimissLoadingModal();
                }
                return ApiConfig.ErrorHandle('client/contracttempdetail', data, err);
            });
    }


    public contracttemplist(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'client/contracttemplist';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('client/contracttemplist', data, res)) {
                    if (showLoadingModal) {
                        ApiConfig.DimissLoadingModal();
                    }
                    if (res==null) {
                        return null;
                    }
                    return res.json();
                } else {
                    return Promise.reject(res);
                }
            })
            .catch(err => {
                if (showLoadingModal) {
                    ApiConfig.DimissLoadingModal();
                }
                return ApiConfig.ErrorHandle('client/contracttemplist', data, err);
            });
    }


    public deleclient(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'client/deleclient';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('client/deleclient', data, res)) {
                    if (showLoadingModal) {
                        ApiConfig.DimissLoadingModal();
                    }
                    if (res==null) {
                        return null;
                    }
                    return res.json();
                } else {
                    return Promise.reject(res);
                }
            })
            .catch(err => {
                if (showLoadingModal) {
                    ApiConfig.DimissLoadingModal();
                }
                return ApiConfig.ErrorHandle('client/deleclient', data, err);
            });
    }


    public delecontract(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'client/delecontract';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('client/delecontract', data, res)) {
                    if (showLoadingModal) {
                        ApiConfig.DimissLoadingModal();
                    }
                    if (res==null) {
                        return null;
                    }
                    return res.json();
                } else {
                    return Promise.reject(res);
                }
            })
            .catch(err => {
                if (showLoadingModal) {
                    ApiConfig.DimissLoadingModal();
                }
                return ApiConfig.ErrorHandle('client/delecontract', data, err);
            });
    }


    public delecontracttemp(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'client/delecontracttemp';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('client/delecontracttemp', data, res)) {
                    if (showLoadingModal) {
                        ApiConfig.DimissLoadingModal();
                    }
                    if (res==null) {
                        return null;
                    }
                    return res.json();
                } else {
                    return Promise.reject(res);
                }
            })
            .catch(err => {
                if (showLoadingModal) {
                    ApiConfig.DimissLoadingModal();
                }
                return ApiConfig.ErrorHandle('client/delecontracttemp', data, err);
            });
    }


    public delehouxuan(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'client/delehouxuan';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('client/delehouxuan', data, res)) {
                    if (showLoadingModal) {
                        ApiConfig.DimissLoadingModal();
                    }
                    if (res==null) {
                        return null;
                    }
                    return res.json();
                } else {
                    return Promise.reject(res);
                }
            })
            .catch(err => {
                if (showLoadingModal) {
                    ApiConfig.DimissLoadingModal();
                }
                return ApiConfig.ErrorHandle('client/delehouxuan', data, err);
            });
    }


    public houxuanlist(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'client/houxuanlist';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('client/houxuanlist', data, res)) {
                    if (showLoadingModal) {
                        ApiConfig.DimissLoadingModal();
                    }
                    if (res==null) {
                        return null;
                    }
                    return res.json();
                } else {
                    return Promise.reject(res);
                }
            })
            .catch(err => {
                if (showLoadingModal) {
                    ApiConfig.DimissLoadingModal();
                }
                return ApiConfig.ErrorHandle('client/houxuanlist', data, err);
            });
    }


    public jiedandetail(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'client/jiedandetail';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('client/jiedandetail', data, res)) {
                    if (showLoadingModal) {
                        ApiConfig.DimissLoadingModal();
                    }
                    if (res==null) {
                        return null;
                    }
                    return res.json();
                } else {
                    return Promise.reject(res);
                }
            })
            .catch(err => {
                if (showLoadingModal) {
                    ApiConfig.DimissLoadingModal();
                }
                return ApiConfig.ErrorHandle('client/jiedandetail', data, err);
            });
    }


    public jiedanhuman(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'client/jiedanhuman';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('client/jiedanhuman', data, res)) {
                    if (showLoadingModal) {
                        ApiConfig.DimissLoadingModal();
                    }
                    if (res==null) {
                        return null;
                    }
                    return res.json();
                } else {
                    return Promise.reject(res);
                }
            })
            .catch(err => {
                if (showLoadingModal) {
                    ApiConfig.DimissLoadingModal();
                }
                return ApiConfig.ErrorHandle('client/jiedanhuman', data, err);
            });
    }


    public jiedanlist(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'client/jiedanlist';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('client/jiedanlist', data, res)) {
                    if (showLoadingModal) {
                        ApiConfig.DimissLoadingModal();
                    }
                    if (res==null) {
                        return null;
                    }
                    return res.json();
                } else {
                    return Promise.reject(res);
                }
            })
            .catch(err => {
                if (showLoadingModal) {
                    ApiConfig.DimissLoadingModal();
                }
                return ApiConfig.ErrorHandle('client/jiedanlist', data, err);
            });
    }


    public jiedanstatus(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'client/jiedanstatus';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('client/jiedanstatus', data, res)) {
                    if (showLoadingModal) {
                        ApiConfig.DimissLoadingModal();
                    }
                    if (res==null) {
                        return null;
                    }
                    return res.json();
                } else {
                    return Promise.reject(res);
                }
            })
            .catch(err => {
                if (showLoadingModal) {
                    ApiConfig.DimissLoadingModal();
                }
                return ApiConfig.ErrorHandle('client/jiedanstatus', data, err);
            });
    }


    public manuallygeneratecontract(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'client/manuallygeneratecontract';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('client/manuallygeneratecontract', data, res)) {
                    if (showLoadingModal) {
                        ApiConfig.DimissLoadingModal();
                    }
                    if (res==null) {
                        return null;
                    }
                    return res.json();
                } else {
                    return Promise.reject(res);
                }
            })
            .catch(err => {
                if (showLoadingModal) {
                    ApiConfig.DimissLoadingModal();
                }
                return ApiConfig.ErrorHandle('client/manuallygeneratecontract', data, err);
            });
    }


    public qianming(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'client/qianming';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('client/qianming', data, res)) {
                    if (showLoadingModal) {
                        ApiConfig.DimissLoadingModal();
                    }
                    if (res==null) {
                        return null;
                    }
                    return res.json();
                } else {
                    return Promise.reject(res);
                }
            })
            .catch(err => {
                if (showLoadingModal) {
                    ApiConfig.DimissLoadingModal();
                }
                return ApiConfig.ErrorHandle('client/qianming', data, err);
            });
    }


    public replacecontract(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'client/replacecontract';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('client/replacecontract', data, res)) {
                    if (showLoadingModal) {
                        ApiConfig.DimissLoadingModal();
                    }
                    if (res==null) {
                        return null;
                    }
                    return res.json();
                } else {
                    return Promise.reject(res);
                }
            })
            .catch(err => {
                if (showLoadingModal) {
                    ApiConfig.DimissLoadingModal();
                }
                return ApiConfig.ErrorHandle('client/replacecontract', data, err);
            });
    }


    public updatecontract(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'client/updatecontract';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('client/updatecontract', data, res)) {
                    if (showLoadingModal) {
                        ApiConfig.DimissLoadingModal();
                    }
                    if (res==null) {
                        return null;
                    }
                    return res.json();
                } else {
                    return Promise.reject(res);
                }
            })
            .catch(err => {
                if (showLoadingModal) {
                    ApiConfig.DimissLoadingModal();
                }
                return ApiConfig.ErrorHandle('client/updatecontract', data, err);
            });
    }


    public waitsignlist(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'client/waitsignlist';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('client/waitsignlist', data, res)) {
                    if (showLoadingModal) {
                        ApiConfig.DimissLoadingModal();
                    }
                    if (res==null) {
                        return null;
                    }
                    return res.json();
                } else {
                    return Promise.reject(res);
                }
            })
            .catch(err => {
                if (showLoadingModal) {
                    ApiConfig.DimissLoadingModal();
                }
                return ApiConfig.ErrorHandle('client/waitsignlist', data, err);
            });
    }

}
