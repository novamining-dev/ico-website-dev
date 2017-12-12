

class Metamask{

    ADDRESS_TOKEN:string;
    CODE_ERROR:Object;
    constructor(){

        this.ADDRESS_TOKEN="0x52Ed534b9D750F90755Fb9899E8DB968a782f217" ;
        this.CODE_ERROR={
            "NO_EXIST_METAMASK":-1
            ,"ERROR_SEND_TRANSACTION":-2
            ,"LOCK_METAMASK":-3
        };
    }

    existMetamask(){

        if (typeof web3 === 'undefined') {
                return false;
        }
        return true;

    }

    isLockMetamask(){

        return new Promise((resolve, reject)=> {
            if(this.existMetamask()) {
                
                web3.eth.getAccounts(function (error, accounts) {
                   if (accounts.length==0) {
                    resolve( {"isLock":true});
                    } else {
                        
                         resolve( {"isLock":false});
                    }
                })
            }
            else{
                resolve( {"error":this.CODE_ERROR.NO_EXIST_METAMASK});
            }

        });

        

    }


    sendTransaction(weiAmount:number){
        return new Promise((resolve, reject)=> {

            web3.eth.sendTransaction({
                from: web3.eth.coinbase,
                to: this.ADDRESS_TOKEN,
                value: weiAmount
            }, function(error, transactionHash) {
                if (!error) {
                    resolve({"data":transactionHash});
                } else {
                    resolve({"error":error});
                }
            })

        });
    }

    async buyToken(amount:number, unit:string)
    {
        if(this.existMetamask()) {
            // web3.toWei(amount, 'ether')

            let lock=  await this.isLockMetamask();
            if(!lock.error){
                if(lock.isLock)
                {
                    return {"error":this.CODE_ERROR.LOCK_METAMASK};
                }
                
            }
            else{

                return {"error":this.CODE_ERROR.NO_EXIST_METAMASK};

            }

            let weiAmount = web3.toWei(amount, unit);
            let  result= await this.sendTransaction(weiAmount);
            if(!result.error){
                return {"transactionHash":result.transactionHash};
            }
            else{
                return {"error":this.CODE_ERROR.ERROR_SEND_TRANSACTION, "infoError":result.error}
            }
        }
        else{
            return {"error":this.CODE_ERROR.NO_EXIST_METAMASK};
        }  
    }


}


Metamask = new Metamask();
module.exports = Metamask;