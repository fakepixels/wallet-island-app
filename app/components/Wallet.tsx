import {
    Avatar,
    Identity,
    Name,
    Address,
    EthBalance,
    Socials,
} from "@coinbase/onchainkit/identity";
import { color } from "@coinbase/onchainkit/theme";
import {
    Wallet,
    ConnectWallet,
    WalletDropdown,
    WalletDropdownLink,
    WalletDropdownDisconnect,
    WalletDropdownBasename,
    WalletDropdownFundLink,
} from "@coinbase/onchainkit/wallet";
import { useAccount } from "wagmi";

export function WalletDemo() {
    const { address } = useAccount();
    return (
        <Wallet>
            <ConnectWallet text="Connect Wallet">
                <Avatar address={address} className="h-6 w-6" />
                <Name />
            </ConnectWallet>
            <WalletDropdown>
                <Identity className="px-4 pt-3 pb-2">
                    <Avatar />
                    <Name />
                    <Address className={color.foregroundMuted} />
                    <EthBalance />
                    <Socials />
                </Identity>
                <WalletDropdownBasename />
                <WalletDropdownLink
                    icon="wallet"
                    href="https://keys.coinbase.com"
                    target="_blank"
                >
                    Wallet
                </WalletDropdownLink>
                <WalletDropdownFundLink />
                <WalletDropdownDisconnect />
            </WalletDropdown>
        </Wallet>
    );
}