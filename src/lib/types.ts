export type TransactionType = 'AWARD' | 'REDEEM';

export type LoyaltyStatement = {
  uuid: string;
  createdAt: string;
  type: TransactionType;
  description: string;
  pointsAwarded?: number;
  pointsRedeemed?: number;
};

export type LoyaltyData = {
  points: number;
  pointsToRedeem: number;
  pointsToExpire: number;
  statements: LoyaltyStatement[];
  totalPointsEarned: number;
  totalAwardsRedeemed: number;
};

export type CouponType = 'ONE_PER_CUSTOMER' | 'UNLIMITED' | 'LIMITED_TIME';

export type Coupon = {
  uuid: string;
  coupon: string;
  title: string;
  subtitle: string;
  description: string;
  type: string;
  thumb: string;
};
