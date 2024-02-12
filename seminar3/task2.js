// Вы разрабатываете ойлайн-магазин по заказу индивидуальных мебельных комплектов. Посетители сайта могут выбирать разные элемениы мебели, цвета и материалы для своего гарнитура. После того, как пользователь собрал свой комплект и сохранил свой выбор, информация о нем сохраняется в куки. при следующем посещении сайта их индивидуальные настройки автоматически загружаются, и они видят ранее созданный мебельный комплект.

// 1. Создайте базовую HTML-структуру с различными элементами мебели (например, стол, стул, диван) и возможными параметрами для них (цвет, материал, дизайн).
// 2. Пользователи могут выбирать разные элементы и параметры, чтобы составить свой мебельный гарнитур.
// 3. После выбора всех желаемых параметров предоставьте кнопку "Сохранить комплект", которая сохраняет текущий выбор пользователя в куки.
// 4. При следующем посещении сайта автоматически загрузите сохраненные параметры из куки и отобразите ранее созданный комплект.
// 5. Убедитесь, что у пользоваиелей есть возможность очистить сохраненные настройки (очистить куки).

const furniture = ["table", "chair", "sofa"];;
const material = [];
const color = [];
const styles = [];

const saveBtn = document.querySelector('#save-btn');
const loadBtn = document.querySelector('#load-btn');
const clearBtn = document.querySelector('#clear-btn');
const selectedTableColor = document.querySelector('#table-color');
console.log(selectedTableColor.value);
const selectedChairMaterial = document.querySelector('#chair-material');

saveBtn.addEventListener('click', () => {
    document.cookie = `table=${selectedTableColor.value}`;
    document.cookie = `chair=${selectedChairMaterial.value}`;
})
loadBtn.addEventListener('click', () => {
    const cookies = document.cookie.split(';');
    // console.log(cookies);
    for (let cookie of cookies) {
        // console.log(cookie);
        let [name, value] = cookie.trim().split('=');
        if (name === 'table') {
            selectedTableColor.value = value;
        }
        if (name === 'chair') {
            selectedChairMaterial.value = value;
        }
    }
})
clearBtn.addEventListener('click', () => {
    // document.cookie.clear();
    // document.cookie = `table=; expires=-1; path=/;`;
    document.cookie = `table=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    document.cookie = `chair=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
})
