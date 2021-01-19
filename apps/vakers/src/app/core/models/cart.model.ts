export interface CartItem {
  reward_id: string,
  title: string,
  img: string,
  value: number,
  available: number,
  quantity?: number
}

export interface RewardToCloud {
  quantity: number,
  reward_id: string
}