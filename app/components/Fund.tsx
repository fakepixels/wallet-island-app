import { FundCard } from '@coinbase/onchainkit/fund';

export default function FundCardComponents() {
  return (
    <div className="p-4 [&_*]:text-left [&_div]:text-left [&_p]:text-left">
      <FundCard assetSymbol="ETH" country="US" />
    </div>
  );
}
