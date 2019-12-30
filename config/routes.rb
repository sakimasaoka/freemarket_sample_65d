Rails.application.routes.draw do
  devise_for :users
    root to: "items#index"
  resources :items, only: [:index, :new]

  # ログイン画面表示
  # root to: "login#index"

  # ユーザー新規登録ページ表示
  # root to: "registration#index_0"
  # root to: "registration#index_1"
  # root to: "registration#index_2"
  # root to: "registration#index_3"
  # root to: "registration#index_4"
  # root to: "registration#index_5"
  # root to: "registration#index_6"

  # ユーザーマイページ編集画面(マイページ完成次第ルーティング編集)
  # root to: "edit_profile#index"

  # 商品詳細ページ
  #  root to: "items#productDetails" 
end