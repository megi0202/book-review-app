// tests/Login.test.jsx
import { test, expect } from '@playwright/test';

test('ログイン画面のエラーメッセージテスト', async ({ page }) => {
  // ローカルサーバーにアクセス（Vite開発サーバーが起動していること）
  await page.goto('http://localhost:3000'); // ローカルのURLを指定

  // メールアドレスが不正な場合
  await page.fill('input[type="email"]', 'invalid-email'); // 不正なメールアドレスを入力
  await page.fill('input[type="password"]', '123'); // 短すぎるパスワードを入力
  await page.click('button'); // ログインボタンをクリック
  await expect(page.locator('text=メールアドレスまたはパスワードに不備があります。')).toBeVisible(); // エラーメッセージが表示されることを確認

  // メールアドレスとパスワードが正しい場合
  await page.fill('input[type="email"]', 'test@example.com'); // 正しいメールアドレスを入力
  await page.fill('input[type="password"]', 'password123'); // 正しいパスワードを入力
  await page.click('button'); // ログインボタンをクリック
  await expect(page.locator('text=メールアドレスまたはパスワードに不備があります。')).not.toBeVisible(); // エラーメッセージが表示されないことを確認
});
