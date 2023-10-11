import React from 'react';

export default function Register() {
  return (
    <form>
      <table>
        <tbody>
          <tr>
            <th>
              <label>お名前</label>
            </th>
            <td>
              <input type='text' />
            </td>
          </tr>
          <tr>
            <th>
              <label>電話番号</label>
            </th>
            <td>
              <input type='text' />
              <span>※連絡のつく番号をお願いします</span>
            </td>
          </tr>
          <tr>
            <th>
              <label>年齢</label>
            </th>
            <td>
              <input type='text' />歳
            </td>
          </tr>
          <tr>
            <th>
              <label>内容</label>
            </th>
            <td>
              <textarea></textarea>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}
