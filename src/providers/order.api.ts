import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { RequestOptions } from '@angular/http';
import { ApiConfig } from '../app/api.config'
@Injectable()
export class OrderApi {

    constructor(public http: Http) {

    }


    public addjiaofei(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'order/addjiaofei';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('order/addjiaofei', data, res)) {
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
                return ApiConfig.ErrorHandle('order/addjiaofei', data, err);
            });
    }


    public addorderprocess(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'order/addorderprocess';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('order/addorderprocess', data, res)) {
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
                return ApiConfig.ErrorHandle('order/addorderprocess', data, err);
            });
    }


    public addprocess(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'order/addprocess';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('order/addprocess', data, res)) {
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
                return ApiConfig.ErrorHandle('order/addprocess', data, err);
            });
    }


    public addpurchase(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'order/addpurchase';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('order/addpurchase', data, res)) {
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
                return ApiConfig.ErrorHandle('order/addpurchase', data, err);
            });
    }


    public addrequest(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'order/addrequest';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('order/addrequest', data, res)) {
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
                return ApiConfig.ErrorHandle('order/addrequest', data, err);
            });
    }


    public cancelorder(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'order/cancelorder';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('order/cancelorder', data, res)) {
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
                return ApiConfig.ErrorHandle('order/cancelorder', data, err);
            });
    }


    public cancelreq(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'order/cancelreq';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('order/cancelreq', data, res)) {
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
                return ApiConfig.ErrorHandle('order/cancelreq', data, err);
            });
    }


    public countryprocess(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'order/countryprocess';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('order/countryprocess', data, res)) {
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
                return ApiConfig.ErrorHandle('order/countryprocess', data, err);
            });
    }


    public createorder(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'order/createorder';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('order/createorder', data, res)) {
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
                return ApiConfig.ErrorHandle('order/createorder', data, err);
            });
    }


    public dehuman(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'order/dehuman';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('order/dehuman', data, res)) {
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
                return ApiConfig.ErrorHandle('order/dehuman', data, err);
            });
    }


    public deleteorder(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'order/deleteorder';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('order/deleteorder', data, res)) {
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
                return ApiConfig.ErrorHandle('order/deleteorder', data, err);
            });
    }


    public editorder(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'order/editorder';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('order/editorder', data, res)) {
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
                return ApiConfig.ErrorHandle('order/editorder', data, err);
            });
    }


    public editorderhuman(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'order/editorderhuman';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('order/editorderhuman', data, res)) {
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
                return ApiConfig.ErrorHandle('order/editorderhuman', data, err);
            });
    }


    public employment(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'order/employment';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('order/employment', data, res)) {
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
                return ApiConfig.ErrorHandle('order/employment', data, err);
            });
    }


    public finish(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'order/finish';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('order/finish', data, res)) {
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
                return ApiConfig.ErrorHandle('order/finish', data, err);
            });
    }


    public finishprocess(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'order/finishprocess';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('order/finishprocess', data, res)) {
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
                return ApiConfig.ErrorHandle('order/finishprocess', data, err);
            });
    }


    public humandetail(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'order/humandetail';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('order/humandetail', data, res)) {
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
                return ApiConfig.ErrorHandle('order/humandetail', data, err);
            });
    }


    public interview(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'order/interview';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('order/interview', data, res)) {
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
                return ApiConfig.ErrorHandle('order/interview', data, err);
            });
    }


    public jiaofeidetail(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'order/jiaofeidetail';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('order/jiaofeidetail', data, res)) {
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
                return ApiConfig.ErrorHandle('order/jiaofeidetail', data, err);
            });
    }


    public orderdetail(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'order/orderdetail';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('order/orderdetail', data, res)) {
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
                return ApiConfig.ErrorHandle('order/orderdetail', data, err);
            });
    }


    public orderhuman(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'order/orderhuman';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('order/orderhuman', data, res)) {
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
                return ApiConfig.ErrorHandle('order/orderhuman', data, err);
            });
    }


    public orderhumandetail(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'order/orderhumandetail';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('order/orderhumandetail', data, res)) {
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
                return ApiConfig.ErrorHandle('order/orderhumandetail', data, err);
            });
    }


    public orderhumanlist(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'order/orderhumanlist';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('order/orderhumanlist', data, res)) {
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
                return ApiConfig.ErrorHandle('order/orderhumanlist', data, err);
            });
    }


    public orderlist(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'order/orderlist';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('order/orderlist', data, res)) {
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
                return ApiConfig.ErrorHandle('order/orderlist', data, err);
            });
    }


    public orderstatus(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'order/orderstatus';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('order/orderstatus', data, res)) {
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
                return ApiConfig.ErrorHandle('order/orderstatus', data, err);
            });
    }


    public orderstatus2(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'order/orderstatus2';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('order/orderstatus2', data, res)) {
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
                return ApiConfig.ErrorHandle('order/orderstatus2', data, err);
            });
    }


    public orderstatus3(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'order/orderstatus3';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('order/orderstatus3', data, res)) {
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
                return ApiConfig.ErrorHandle('order/orderstatus3', data, err);
            });
    }


    public plcreateorder(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'order/plcreateorder';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('order/plcreateorder', data, res)) {
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
                return ApiConfig.ErrorHandle('order/plcreateorder', data, err);
            });
    }


    public process(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'order/process';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('order/process', data, res)) {
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
                return ApiConfig.ErrorHandle('order/process', data, err);
            });
    }


    public processdetail(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'order/processdetail';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('order/processdetail', data, res)) {
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
                return ApiConfig.ErrorHandle('order/processdetail', data, err);
            });
    }


    public processstatus(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'order/processstatus';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('order/processstatus', data, res)) {
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
                return ApiConfig.ErrorHandle('order/processstatus', data, err);
            });
    }


    public purchaselist(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'order/purchaselist';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('order/purchaselist', data, res)) {
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
                return ApiConfig.ErrorHandle('order/purchaselist', data, err);
            });
    }


    public reqstart(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'order/reqstart';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('order/reqstart', data, res)) {
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
                return ApiConfig.ErrorHandle('order/reqstart', data, err);
            });
    }


    public requestlist(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'order/requestlist';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('order/requestlist', data, res)) {
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
                return ApiConfig.ErrorHandle('order/requestlist', data, err);
            });
    }


    public stophuman(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'order/stophuman';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('order/stophuman', data, res)) {
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
                return ApiConfig.ErrorHandle('order/stophuman', data, err);
            });
    }


    public sysprocess(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'order/sysprocess';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('order/sysprocess', data, res)) {
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
                return ApiConfig.ErrorHandle('order/sysprocess', data, err);
            });
    }


    public updateprocess(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'order/updateprocess';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('order/updateprocess', data, res)) {
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
                return ApiConfig.ErrorHandle('order/updateprocess', data, err);
            });
    }


    public xuqiu(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'order/xuqiu';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('order/xuqiu', data, res)) {
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
                return ApiConfig.ErrorHandle('order/xuqiu', data, err);
            });
    }

}
