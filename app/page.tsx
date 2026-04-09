import {
	Container,
	Title,
	TopBar,
	FiltersLayout,
	ProductGroupList
} from "@/components/shared";

export default function Home() {
	return (
		<>
			<Container className="mt-10">
				<Title text="Все пиццы" size="lg" className="font-extrabold" />
			</Container>

			<TopBar />
			{/* mainPage */}
			<Container className="mt-10 pb-14">
				<div className="flex gap-[60px]">
					{/* Фильтрация */}
					<div className="w-[250px]">
						<FiltersLayout />
					</div>

					{/* Список товаров */}
					<div className="flex-1">
						<div className="flex flex-col gap-16">
							<ProductGroupList title={"Пиццы"} products={[
								{
									id: 1,
									name: 'Пепперони',
									imageUrl: '/testPizzaImage.png',
									items: [
										{
											price: 500
										}
									]
								},
								{
									id: 2,
									name: 'Маргарита',
									imageUrl: '/testPizzaImage.png',
									items: [
										{
											price: 450
										}
									]
								},
								{
									id: 3,
									name: 'Гавайская',
									imageUrl: '/testPizzaImage.png',
									items: [
										{
											price: 550
										}
									]
								}
							]} categoryId={1} />
							<ProductGroupList title={"Комбо"} products={[
								{
									id: 1,
									name: 'Пепперони',
									imageUrl: '/testPizzaImage.png',
									items: [
										{
											price: 500
										}
									]
								},
								{
									id: 2,
									name: 'Маргарита',
									imageUrl: '/testPizzaImage.png',
									items: [
										{
											price: 450
										}
									]
								},
								{
									id: 3,
									name: 'Гавайская',
									imageUrl: '/testPizzaImage.png',
									items: [
										{
											price: 550
										}
									]
								}
							]} categoryId={2} />
						</div>
					</div>

				</div>
			</Container>
		</>
	);
}
