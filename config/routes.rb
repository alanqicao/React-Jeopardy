Rails.application.routes.draw do
  namespace :api do
    resources :categorys do
      resources :cards
    end
    resources :cards do
      resources :questions
    end
  end

  get '*other', to: 'static#index'
  
end