import React from "react";
import Button from "../../components/Button/Button";
import Flex from "../../components/Box/Flex";
import useWalletModal from "./useWalletModal";

export default {
  title: "Widgets/WalletModal",
  argTypes: {},
};

export const Wallet: React.FC = () => {
  const { onPresentConnectModal, onPresentAccountModal, onPresentConnectModal1 } = useWalletModal(
    () => null,
    () => null,
    "0xbdda50183d817c3289f895a4472eb475967dc980"
  );
  return (
    <Flex>
      <Button onClick={onPresentConnectModal}>Open connect modal</Button>
      <Button onClick={onPresentAccountModal}>Open account modal</Button>
      <Button onClick={onPresentConnectModal1}>Open connect modal1</Button>
    </Flex>
  );
};
