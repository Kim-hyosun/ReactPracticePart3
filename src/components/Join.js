import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./join.scss";

function Join() {
  const init = {
    userId: "",
    userPw1: "",
    userPw2: "",
    userEmail: "",
    reason: "",
    gender: null,
    interest: null,
  };

  const [val, setVal] = useState(init);
  const [Err, setErr] = useState({});
  const [Submit, setSubmit] = useState(false);
  const navigate = useNavigate();

  const check = (value) => {
    const errs = {};

    const eng = /[a-zA-Z]/;
    const num = /[0-9]/;
    const enti = /[~!@#$%^&*()_+]/;

    // userId
    if (value.userId.length < 5) {
      errs.userId = "5글자이상 입력하세요";
    }

    // userEmail
    if (value.userEmail.length < 8 || !/@/.test(val.userEmail)) {
      errs.userEmail = "8글자이상 @를 포함해서 작성하세요";
    }

    // userPw1
    if (
      value.userPw1 < 5 ||
      !eng.test(value.userPw1) ||
      !num.test(value.userPw1) ||
      !enti.test(value.userPw1)
    ) {
      errs.userPw1 = "5글자 이상, 영문, 숫자, 특수 문자 포함해야 합니다";
    }

    // userPw2
    if (value.userPw1 !== value.userPw2 || value.userPw2 < 5) {
      errs.userPw2 = "비밀번호가 틀립니다";
    }

    // reason
    if (val.reason === "") {
      errs.reason = "이유를 선택하세요";
    }

    // gender
    if (!val.gender) {
      errs.gender = "성별을 선택하세요";
    }

    // interest
    if (!val.interest) {
      errs.interest = "관심사를 선택하세요";
    }

    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErr(check(val));
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setVal({ ...val, [name]: value });
  };

  const handleSelect = (e) => {
    const { name } = e.target;
    const isSelect = e.target.value;
    setVal({ ...val, [name]: isSelect });
  };

  const handleRadio = (e) => {
    const { name } = e.target;
    const isCheck = e.target.checked;
    setVal({ ...val, [name]: isCheck });
  };

  const handleCheck = (e) => {
    let isCheck = false;
    const { name } = e.target;
    const inputs = e.target.parentElement.querySelectorAll("input");
    inputs.forEach((ele) => {
      if (ele.checked) isCheck = true;
    });
    setVal({ ...val, [name]: isCheck });
  };

  const handleReset = () => {
    setSubmit(false);
    setErr({});
    setVal(init);
  };

  // 오류없이 가입시
  useEffect(() => {
    // Object.keys(); 객체에 포함된 문자열 반환
    const errCheck = Object.keys(Err).length;
    if (errCheck === 0 && Submit) {
      alert("회원가입이 완료되었습니다.");
      navigate("/");
    }
  }, [Err]);

  return (
    <article className="join">
      <div className="banner">회원가입</div>

      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>회원가입</legend>
          {/* userId */}
          <div className="row">
            <label htmlFor="userId">
              아이디<em>(5글자 이상)</em>
            </label>
            <input
              type="text"
              name="userId"
              id="userId"
              placeholder="아이디를 입력하세요"
              value={val.userId}
              onChange={handleChange}
            />
            <p className="errMsg">{Err.userId}</p>
          </div>

          {/* password */}
          <div className="row">
            <label htmlFor="userPw1">
              비밀번호<em>(5글자 이상, 영문, 숫자, 특수 문자 포함)</em>
            </label>
            <input
              type="password"
              name="userPw1"
              id="userPw1"
              placeholder="비밀번호를 입력하세요"
              onChange={handleChange}
            />
            <p className="errMsg">{Err.userPw1}</p>
          </div>
          <div className="row">
            <label htmlFor="userPw2">비밀번호 확인</label>
            <input
              type="password"
              name="userPw2"
              id="userPw2"
              placeholder="비밀번호를 입력하세요"
              onChange={handleChange}
            />
            <p className="errMsg">{Err.userPw2}</p>
          </div>

          {/* email */}
          <div className="row">
            <label htmlFor="userEmail">이메일</label>
            <input
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="이메일을 입력하세요"
              value={val.userEmail}
              onChange={handleChange}
            />
            <p className="errMsg">{Err.userEmail}</p>
          </div>
          {/* reason */}
          <div className="row">
            <label htmlFor="reason">가입 이유</label>
            <select name="reason" id="reason" onChange={handleSelect}>
              <option value="">선택</option>
              <option value="study1">공부1</option>
              <option value="study2">공부2</option>
              <option value="study3">공부3</option>
            </select>
            <p className="errMsg">{Err.reason}</p>
          </div>

          {/* gender */}
          <div className="row inline">
            <h3>성별</h3>
            <label htmlFor="male">남</label>
            <input
              type="radio"
              name="gender"
              id="male"
              onChange={handleRadio}
            />
            <label htmlFor="female">여</label>
            <input
              type="radio"
              name="gender"
              id="female"
              onChange={handleRadio}
            />
            <p className="errMsg">{Err.gender}</p>
          </div>

          {/* interest */}
          <div className="row inline">
            <h3>관심분야</h3>
            <label htmlFor="html5">html5</label>
            <input
              type="checkbox"
              name="interest"
              id="html5"
              onChange={handleCheck}
            />
            <label htmlFor="css3">css3</label>
            <input
              type="checkbox"
              name="interest"
              id="css3"
              onChange={handleCheck}
            />
            <label htmlFor="javascript">javascript</label>
            <input
              type="checkbox"
              name="interest"
              id="javascript"
              onChange={handleCheck}
            />
            <label htmlFor="react">react</label>
            <input
              type="checkbox"
              name="interest"
              id="react"
              onChange={handleCheck}
            />
            <p className="errMsg">{Err.interest}</p>
          </div>

          <div className="btnGroup">
            <button type="submit" onClick={() => setSubmit(true)}>
              가입
            </button>
            <button type="reset" onClick={handleReset}>
              취소
            </button>
          </div>
        </fieldset>
      </form>
    </article>
  );
}

export default Join;