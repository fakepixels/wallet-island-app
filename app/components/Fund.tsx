import { FundCard } from '@coinbase/onchainkit/fund';

export default function FundCardComponents() {
  return (
    <div className="p-4">
      <FundCard assetSymbol="ETH" country="US" />
    </div>
  );
}
