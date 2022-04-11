import { serviceInstancesMap } from "module/common/query/useLoad";
import { DepositInDAOParams } from "module/common/service/CkbSdkService.types";
import { useMutation } from "react-query";

const useDepositInDAO = (index: number) => {
    const serviceInstance = serviceInstancesMap.get(index)!;
    return useMutation((params: DepositInDAOParams) => serviceInstance.depositInDAO(params));
};

export default useDepositInDAO;
