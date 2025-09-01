import { stringUtils } from '../utils/helpers';

//destructuring assignment
const { isEmpty, safeTrim } = stringUtils;

// 유효성 검사 모듈 - 구조분해할당과 화살표 함수 사용

// 정규식 패턴들 - 각 필드의 유효한 형식을 정의
export const patterns = {
    
    isbn : /^(978|979)[0-9]{10}$/,
   
    publishDate : /^\d{4}-\d{2}-\d{2}$/
}

// 에러 메시지들을 타입별로 분류하여 관리
export const messages = {
    // 필수 입력 필드가 비어있을 때 표시할 메시지들
    required: {
        title: "제목을 입력해주세요.",
        author:"저자를 입력해주세요.",
        isbn: "ISBN을 입력해주세요.",
        price: "가격을 입력해주세요.",
        publishDate:"출판일을 입력해주세요.",
        description: "설명을 입력해주세요.",
        language: "언어를 입력해주세요.",
        pageCount:"페이지 수를 입력해주세요.",
        publisher: "출판사를 입력해주세요.",
        coverImageUrl: "표지를 입력해주세요.",
        edition :"버전을 입력해주세요."
     
    },
    
    // 입력 형식이 올바르지 않을 때 표시할 메시지들
    format: {
        isbn: "ISBN은 13자리 숫자입니다.",
        publishDate: "출판일의 형식은 0000-00-00입니다.",
    }
}

// 개별 필드별 검증 함수들을 담은 객체 (화살표 함수 사용)
const validators = {
    
    title: (title) => {
        // 1단계: 필수 입력 확인 - 값이 없거나 공백만 있는 경우
        // !title : null, undefined, 빈 문자열을 체크
        // title.trim().length === 0 : 공백만 있는 문자열을 체크
        if (isEmpty(title)) {
            return { 
                isValid: false,                    // 검증 실패
                message: messages.required.title,   // 에러 메시지
                field: 'title'                      // 문제가 발생한 필드명
            }
        }
        
        if (safeTrim(title).length < 2) {
            return { 
                isValid: false, 
                message: '제목은 최소 2글자 이상이어야 합니다.', 
                field: 'title' 
            }
        }
        
        // 3단계: 모든 검증 통과
        return { isValid: true }
    },

    author: (author) => {
        // 1단계: 필수 입력 확인 - 값이 없거나 공백만 있는 경우
        // !author : null, undefined, 빈 문자열을 체크
        // author.trim().length === 0 : 공백만 있는 문자열을 체크
        if (isEmpty(author)) {
            return { 
                isValid: false,                    // 검증 실패
                message: messages.required.author,   // 에러 메시지
                field: 'author'                      // 문제가 발생한 필드명
            }
        }
        
        // 3단계: 모든 검증 통과
        return { isValid: true }
    },
    
    // ISBN 필드 검증 함수
    isbn: (isbn) => {
        // 1단계: 필수 입력 확인
        if (isEmpty(isbn)) {
            return { 
                isValid: false, 
                message: messages.required.isbn, 
                field: 'isbn' 
            }
        }
        
        // 2단계: 정규식 패턴 매칭 확인
        // patterns.isbn.test() : 정규식이 문자열과 매치되는지 확인 (true/false 반환)
        // .trim() : 앞뒤 공백 제거 후 검사
        if (!patterns.isbn.test(safeTrim(isbn))) {
            return { 
                isValid: false, 
                message: messages.format.isbn, 
                field: 'isbn' 
            }
        }
        
        // 3단계: 모든 검증 통과
        return { isValid: true }
    },
    
    // 가격 필드 검증 함수
    price: (price) => {
        // 1단계: 필수 입력 확인
        if (isEmpty(price)) {
            return { 
                isValid: false, 
                message: messages.required.price, 
                field: 'price' 
            }
        }
        
        
        // 3단계: 모든 검증 통과
        return { isValid: true }
    },
    
    // 출판일 필드 검증 함수
    publishDate: (publishDate) => {
        // 1단계: 필수 입력 확인
        if (isEmpty(publishDate)) {
            return { 
                isValid: false, 
                message: messages.required.publishDate, 
                field: 'publishDate' 
            }
        }
        
        // 2단계: 출판일 형식 확인 - 숫자, 하이픈, 공백만 허용
        if (!patterns.publishDate.test(safeTrim(publishDate))) {
            return { 
                isValid: false, 
                message: messages.format.publishDate, 
                field: 'publishDate' 
            }
        }
        
        // 3단계: 모든 검증 통과
        return { isValid: true }
    },
    
    // 설명 필드 검증 함수
    description: (description) => {
        // 1단계: 필수 입력 확인
        if (isEmpty(description)) {
            return { 
                isValid: false, 
                message: messages.required.description, 
                field: 'description' 
            }
        }
        
        // 3단계: 모든 검증 통과
        return { isValid: true }
    },

    language: (language) => {
        // 1단계: 필수 입력 확인
        if (isEmpty(language)) {
            return { 
                isValid: false, 
                message: messages.required.language, 
                field: 'language' 
            }
        }
        
        // 3단계: 모든 검증 통과
        return { isValid: true }
    },

    pageCount: (pageCount) => {
        // 1단계: 필수 입력 확인
        if (isEmpty(pageCount)) {
            return { 
                isValid: false, 
                message: messages.required.pageCount, 
                field: 'pageCount' 
            }
        }
        
        // 3단계: 모든 검증 통과
        return { isValid: true }
    },

    publisher: (publisher) => {
        // 1단계: 필수 입력 확인
        if (isEmpty(publisher)) {
            return { 
                isValid: false, 
                message: messages.required.publisher, 
                field: 'publisher' 
            }
        }
        
        // 3단계: 모든 검증 통과
        return { isValid: true }
    },

    coverImageUrl: (coverImageUrl) => {
        // 1단계: 필수 입력 확인
        if (isEmpty(coverImageUrl)) {
            return { 
                isValid: false, 
                message: messages.required.coverImageUrl, 
                field: 'coverImageUrl' 
            }
        }
        
        // 3단계: 모든 검증 통과
        return { isValid: true }
    },

    edition: (edition) => {
        // 1단계: 필수 입력 확인
        if (isEmpty(edition)) {
            return { 
                isValid: false, 
                message: messages.required.edition, 
                field: 'edition' 
            }
        }
        
        // 3단계: 모든 검증 통과
        return { isValid: true }
    }
}

// 메인 검증 함수 - 도서 객체 전체를 검증 (구조분해할당 사용)
export const validateBook = (book) => {
    // 1단계: 입력 데이터 자체가 존재하는지 확인
    if (!book) {
        return { isValid: false, message: '도서 데이터가 필요합니다.' }
    }
    
    // 2단계: 구조분해할당으로 필요한 데이터 추출
    const { title, author, isbn, price,
        publishDate, detailRequest } = book
    
    // 3단계: 기본 필드들 순차적 검증
    
 
    const titleResult = validators.title(title)
    if (!titleResult.isValid) {
        return titleResult  // 검증 실패 시 즉시 결과 반환 (Early Return 패턴)
    }
    
   
    const authorResult = validators.author(author)
    if (!authorResult.isValid) {
        return authorResult  // 검증 실패 시 즉시 결과 반환
    }

    const isbnResult = validators.isbn(isbn)
    if (!isbnResult.isValid) {
        return isbnResult  // 검증 실패 시 즉시 결과 반환
    }

    const priceResult = validators.price(price)
    if (!priceResult.isValid) {
        return priceResult  // 검증 실패 시 즉시 결과 반환
    }

    const publishDateResult = validators.publishDate(publishDate)
    if (!publishDateResult.isValid) {
        return publishDateResult  // 검증 실패 시 즉시 결과 반환
    }


    
    // 4단계: 상세 정보(detailRequest)가 있는 경우에만 세부 검증 수행
    if (detailRequest) {
        // 구조분해할당으로 상세 정보에서 필요한 필드들 추출
        const { description, 
            language,
            pageCount,
            publisher,
            coverImageUrl,
            edition } = detailRequest
        
       
        const languageResult = validators.language(language)
        if (!languageResult.isValid) {
            return languageResult  // 검증 실패 시 즉시 결과 반환
        }
        
        
        const pageCountResult = validators.pageCount(pageCount)
        if (!pageCountResult.isValid) {
            return pageCountResult  // 검증 실패 시 즉시 결과 반환
        }
        
        
        const publisherResult = validators.publisher(publisher)
        if (!publisherResult.isValid) {
            return publisherResult  // 검증 실패 시 즉시 결과 반환
        }

        const coverImageUrlResult = validators.coverImageUrl(coverImageUrl)
        if (!coverImageUrlResult.isValid) {
            return coverImageUrlResult  // 검증 실패 시 즉시 결과 반환
        }

        const editionResult = validators.edition(edition)
        if (!editionResult.isValid) {
            return editionResult  // 검증 실패 시 즉시 결과 반환
        }
    }
    
    // 5단계: 모든 검증을 통과한 경우
    return { isValid: true }
}

// 실시간 검증 함수 - 사용자가 입력하는 중에 개별 필드를 검증할 때 사용
export const validateField = (fieldName, value) => {
    // 1단계: 해당 필드명에 대응하는 검증 함수가 있는지 확인
    // validators 객체에서 fieldName에 해당하는 함수를 찾음
    const validator = validators[fieldName]
    
    // 2단계: 검증 함수가 없는 경우 (잘못된 필드명)
    if (!validator) {
        return { 
            isValid: true,  // 알 수 없는 필드는 일단 통과로 처리
            message: '알 수 없는 필드입니다.' 
        }
    }
    
    // 3단계: 해당 검증 함수 실행하여 결과 반환
    return validator(value)
}