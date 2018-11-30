# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_11_29_053715) do

  create_table "debts", force: :cascade do |t|
    t.integer "expense_id"
    t.integer "user_id"
    t.float "amount"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["expense_id"], name: "index_debts_on_expense_id"
    t.index ["user_id"], name: "index_debts_on_user_id"
  end

  create_table "expenses", force: :cascade do |t|
    t.integer "creator_id", null: false
    t.integer "payer_id", null: false
    t.float "amount", default: 0.0, null: false
    t.string "currency", default: "CAD", null: false
    t.string "description"
    t.string "category"
    t.boolean "split_evenly", default: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "kind", default: "expense"
    t.string "payment_kind", default: "sent"
    t.index ["creator_id"], name: "index_expenses_on_creator_id"
    t.index ["payer_id"], name: "index_expenses_on_payer_id"
  end

  create_table "friendships", force: :cascade do |t|
    t.integer "primary_id"
    t.integer "secondary_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.float "primary_owes", default: 0.0
    t.float "secondary_owes", default: 0.0
    t.index ["primary_id"], name: "index_friendships_on_primary_id"
    t.index ["secondary_id"], name: "index_friendships_on_secondary_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.string "first_name"
    t.string "last_name"
    t.float "total_balance", default: 0.0, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "avatar_url"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  create_table "wallet_addresses", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "address", null: false
    t.boolean "is_default", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_wallet_addresses_on_user_id"
  end

end
