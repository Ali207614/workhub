
INSERT INTO users (
    username,
    tel_number,
    password
) VALUES ( 'Umidjon','998903367448', crypt('user', gen_salt('bf')) );


INSERT INTO orders (
    user_id,
    description_project
) VALUES ( 1,'CRM kerak' );