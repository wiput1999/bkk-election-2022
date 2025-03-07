<script lang="ts">
	import Metadata from '../components/metadata.svelte';
	import ExternalLink from '../components/external-link.svelte';
	import PartnersLogo from '../components/partners-logo.svelte';
</script>

<Metadata title="เกี่ยวกับเว็บไซต์นี้ - Bangkok Election 2022" />

<div class="max-w-screen-md mx-auto px-4 py-12 md:py-24 space-y-16 md:space-y-20 typo-b4">
	<div class="flex flex-col items-center space-y-4">
		<img
			src="/static/images/bkkelection-black-big.svg"
			class="w-full max-w-md"
			alt="Bangkok Election 2022"
		/>
		<p class="typo-h6 text-center">ข้อมูลเกี่ยวกับการเลือกตั้งผู้ว่าฯ และสมาชิกสภา กทม. ปี 2565</p>
	</div>

	<div class="paragraph">
		<h2 class="typo-h3">เกี่ยวกับโปรเจกต์นี้</h2>
		<p>
			29 สิงหาคม 2553 คือครั้งสุดท้ายที่คน กทม. ได้ออกไปใช้สิทธิเลือกสมาชิกสภา กทม. (ส.ก.) และ 3
			มีนาคม 2556 คือครั้งสุดท้ายที่คน กทม. ได้ออกไปใช้สิทธิเลือกผู้ว่าฯ กทม.
		</p>
		<p>
			ผ่านมาเกือบ 10 ปีที่คูหาเลือกตั้งใน กทม.
			ว่างเว้นจากเสียงที่แท้จริงของประชาชนในการกำหนดอนาคตเมืองของตัวเอง วันที่ 22 พฤษภาคม 2565
			จึงเป็นโอกาสครั้งสำคัญที่คน กทม. จะได้ไปใช้สิทธิเลือกตั้งผู้ว่าฯ กทม. และ ส.ก.
			เพื่อมาทำหน้าที่แก้ปัญหาที่สั่งสมมาอย่างยาวนาน
			และร่วมสร้างเมืองที่อยากอยู่และอยากเห็นไปพร้อมกัน
		</p>
		<p>
			<b>WeVis x THE STANDARD x Wisesight</b> จึงร่วมกันพัฒนาเว็บไซต์ Bangkok Election 2022 เพื่อรวบรวมข้อมูลทุกมิติเกี่ยวกับการเลือกตั้งครั้งสำคัญนี้
			ครอบคลุมทั้งบทสัมภาษณ์พิเศษของผู้สมัครชิงตำแหน่งผู้ว่าฯ กทม. สถิติที่น่าสนใจของการเลือกตั้งในประวัติศาสตร์
			คู่มือการเลือกตั้ง และปัญหา กทม. ที่รอการแก้ไขจากผู้ว่าฯ คนใหม่ ในรูปแบบที่เข้าถึง เข้าใจ และเข้าใช้ง่าย
			ด้วยความมุ่งหวังให้ผู้มีสิทธิออกเสียงทุกคนสามารถนำข้อมูลเหล่านี้ไปเป็นส่วนหนึ่งในการตัดสินใจเพื่อ
			‘พลิกเมืองด้วยเสียงคุณ’
		</p>
	</div>

	<div class="paragraph">
		<h2 class="typo-h3">นโยบายการนำข้อมูลไปใช้ต่อ</h2>
		<p>
			ทางทีม <b>WeVis</b> มีความตั้งใจที่พัฒนาทุกโปรเจ็กต์ให้เป็น Open Source และเปิดข้อมูลเป็น Open
			Data ภายใต้เงื่อนไข Creative Commons Attribution-ShareAlike License คือสามารถนำไปเผยแพร่และดัดแปลงได้
			โดยต้องระบุที่มา แต่ห้ามนำไปใช้เพื่อการค้า และต้องเผยแพร่งานดัดแปลงโดยใช้สัญญาอนุญาตชนิดเดียวกัน
		</p>
		<p>
			หากมีข้อสงสัยต้องการสอบถามเพิ่มเติม ประสงค์แจ้งเปลี่ยนแปลงหรือเพิ่มเติมข้อมูลเพื่อความถูกต้อง
			หรือมีข้อเสนอแนะใดๆ สามารถติดต่อได้ที่ team [at] punchup.world
		</p>
	</div>

	<div class="paragraph">
		<h2 class="typo-h3">ทีมงานร่วมพัฒนา</h2>

		<PartnersLogo black />
	</div>

	<div class="paragraph">
		<h2 class="typo-h3">ทุนสนับสนุน</h2>
		<p>
			<ExternalLink href="https://punchup.world/">Punch Up</ExternalLink> และ <ExternalLink
				href="https://wevis.info/">WeVis</ExternalLink
			> ได้รับการสนับสนุนทุนในการดำเนินงานจาก <ExternalLink href="https://www.ned.org/"
				>National Endowment for Democracy (NED)</ExternalLink
			> ซึ่งนำมาใช้เป็นต้นทุนในการรวมรวมข้อมูล ออกแบบ พัฒนาเว็บไซต์ ประสานงาน บริหารจัดการ ตลอดจนการจัด
			Meetup เพื่อดำเนินโครงการ
		</p>
	</div>

	<div class="paragraph">
		<h2 class="typo-h3">ที่มาของข้อมูล</h2>
		<ul class="list-inside list-disc">
			<li>
				<ExternalLink href="https://www.ect.go.th/bangkok/"
					>สำนักงานคณะกรรมการการเลือกตั้งประจำกรุงเทพมหานคร</ExternalLink
				>
			</li>
			<li>
				<ExternalLink href="https://webportal.bangkok.go.th/psbma"
					>สำนักปลัดกรุงเทพมหานคร</ExternalLink
				>
			</li>
			<li>
				<ExternalLink href="https://www.prbangkok.com/"
					>สำนักงานประชาสัมพันธ์ กรุงเทพมหานคร</ExternalLink
				>
			</li>
			<li>
				<ExternalLink href="https://wisesight.com/monitoring/"
					>Social Monitoring by Wisesight</ExternalLink
				>
			</li>
		</ul>
	</div>

	<div class="flex flex-col md:flex-row gap-2 justify-center">
		<ExternalLink button href="https://wevis.info/downloads"
			><svg
				width="21"
				height="21"
				viewBox="0 0 21 21"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g clip-path="url(#clip0_314_173)">
					<path
						d="M7.03582 2.86356H1.17529V19.4081H19.8247V2.86356C19.8247 2.86356 15.306 2.86356 13.9642 2.86356"
						stroke="currentColor"
						stroke-width="2"
						stroke-miterlimit="10"
					/>
					<path
						d="M16.0317 8.65536L10.7284 13.9587L5.42513 8.65536"
						stroke="currentColor"
						stroke-width="2"
						stroke-miterlimit="10"
					/>
					<line x1="10.667" y1="0.5" x2="10.667" y2="13" stroke="currentColor" stroke-width="2" />
				</g>
				<defs>
					<clipPath id="clip0_314_173">
						<rect width="20.8333" height="20" fill="white" transform="translate(0.0834961 0.5)" />
					</clipPath>
				</defs>
			</svg>
			<span>ดาวน์โหลดข้อมูล</span>
		</ExternalLink>
		<ExternalLink button href="https://github.com/wevisdemo/bkk-election-2022">
			<svg width="24" height="24" viewBox="0 0 24 24"
				><path
					d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
					fill="currentColor"
				/></svg
			>
			<span>View on GitHub</span>
		</ExternalLink>
		<ExternalLink button href="https://airtable.com/shryu4errnlj1LWsM">
			<img
				width="30"
				src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAACa5JREFUaAXtWWtTVMkZfmaY4TbKTZTLBAQUxJV4qc2mSlNJ5T/kJ+Rz/tD+iXzLhyS1ycZsuVtRUNCIwjirKIW6pTAwl3Od1NP4HJrmDMVuspVya7rq+L793p+3+/TpQaA92h1od6DdgXYH2h1od6DdgXYH2h34n3QgY0cpl8vdU1NTOVv2E+LDTCbTSABvbLz6fSab/0Oh0NmbzSTinwTeOI5RqXqNKAw+N8i2trYK77e3l7p6+ma7OvModOeBjxRzs9lEJpOBTat1H/VGgOruuw1t30JvT0//5tZLnBspohlH6O3p/GhXl2A54mYTezUPvh/i5Ysyps5PFAQYuVwuMzTQj43nZfxscsoYFz6AVsf+2w6o63YcyUSpU8HKS+rK7RguL3+urBdEKK8/RXF8BPl8HlkZM2hvby+GBvvwbbkEP4hMd+jMd0CD8x/6MIbrK5ko9Rri5WPLJUujtOPKen6I0toTDA6cRn9/v3FPAHNG0FQM9BVQLq3BD2NUaz5YggIraRqlDYds0+a27vvyyqm4mosqntnGQYT1tSfo6cphZGTEYCO+ZEvLKZvN4syZM/B9H8/Wn2LmwiyaNQ/a3rJzKZMxoL0baNOqONf/JHM3ljtnDG5j7s7S+hoyzRDnz18EMWkccJIA6OjowOjoKDpzGTzjSgex2SIE4z5Mqoc68T82TctVre9v43JpHY1aBXNzc4fAEuIhwFwhPhwEPTExAcQBys/WzfauNQJYr5ixEzAzafEPbTRkL5nm0otKr3kalS8pV7bhR3j+7TO8f/cGCwsLBoONiTESwHKmUEYEPT09Db+xh+flZ/D8CLWGf2SV3VV354wtmfJIprn0otJrnkbly5p4QG28eI7NVy9w/fp1cyILh5pF+wSwhDbl3s/lcpidncVe5R02XpTN+1H3uNIHW9n2oVzD5m2ZfCUTte1tXnpR+bMJvFDUvRCvXm6gXHqCX3z6Kbq6upJFk618jxxaUogSNL9f8/PzWF5ZQSabRbE4YQB35TuMmV4D+djF2rz0omk6W2bz9HHn3HHcxltbm1h9vIJf3bqFnp6eBCx9VBt9ySeAKXAD0oAygu7s7MTClStYWloyjqNjRVaAznyHsVFggfkxqF0fLxQE+/b1a6zcv4dbt27i1KlT5r21c9s+lB8L2DYW6KtXr2JxcRGZTBYjI2PmEOvMZ480y05KvlVDmMPV2XndOJzzs1P3I7z77jss3r2DmzdvYmBgIAHrxlMMxk0AS3gc5SHW3d2Na9eu4d69RbPyw8PneGtFPre/vdP8WcBxIGwdedfe1gdhjIYX4f37d/jm69v45WefYWhoyNQiX9Zg+6gmxk0AR1F0pNMyJFURBM0r6LVrVw3oT35+wyRsxk3kculnIH1POtIKlW8Yxqh7MSqVbdz56kvcuHHd3KJYE3O4edJiHaqQBvbDU1BOogzK7c33hQlX7t/FzvZ71P0Y7L583Diu3J7bfJof9UEYoeZF2N2r4PY/vsDCwhUUi8XkW6umkNoxVDcp4ySAXSMZ2oEUjKDZVYI2K/2vr1Gp7KDuRYiiw02z4zKhHhXAuctrLt8wig3YanUPX37xF1yam8Xk5GRLsGk1S5YAlkCgRJXU1pMXaP7YYLfv/PPv2N2toOZHyUoLnEApVhq1bfl6GZ84xgHYKv765z9hevq8uQxpGzOWhvi0+NIlgG0jBrDn4hVYVNuboIvFcSzd/Qb1et2coCxUfqQ2oDRettRphHHT7Brf8/DV7b+hv++0AcvLEHNryJdz8a1ocmjR4LihAAoqygL39vbMvZv310f/fozpi/NAsxPdeR4kh6PahUrj5t7PBdSDJoIgwPL9u/jtb35teDaUh6btY/OMmZZD9SaAj0vOAPtF7DdFPLdepVIxV7lz586B8/lLc1h9soqZ2csA8ujKsQBFT/9cHGj3Ofa+ETQRhpE5FK98cjn5zr59+9bk5K5iXTxAVZ/isL400MbeNuJqCYwo9ZKTp5zzMAyxs7NjEvIHNgeTs/tzsxdRevoYfhCYwvm3JQ3FbUUZmye+AfvgHuYvzZrf5wLAxvL9ZaP1rqs+N6Yr5zz1HXYdWSxldOCjlaWcv5vtwcIKhQIuXpg2oFl4w28i+uBrx1E8m3JloyjGw+VFXJiZwvDwWbNaAkx//QVDoO16VQtlHLaO/CHAMrYpjViQHLmyfGcJmmAllw8L48NP1vTUJNbXHhsAns846Z+s/cL2t3EUA48ePsDExHgCTGCVgzkJmnURNGuym6aaSPdjH9AEsBS2sc0zIANXq1V4nofx8XHlPxKUBXJ79/X1YaI4htLaKqK4abY3V8+OS56r3whiEOzqo2WMnB3C+Nh4srKuvRKz4Wy8FsBeGPlQxiFdAlgCGZJKRsrAtVotAWvb2byKEWjec8dGz2J9bdV8U+sB4IcECdOEIOSnhzzw5PFDDPQXzKVCh5HikSqP6qKMoPn3Ny4Ea6RO+jT7Q6c0DezBuZz5OSBgraxsRW0/8QI9PDxsVmv10QMUJ6fNyoem8fvH995eBaX1VYyPjhy6VCgOqZtHc+YYGxvD5uamycHfw2wWHw7qNehjAHNLKACV5O2HYNlBBmYA21bBbCq9bHmqEjRP8FKphBfldXT39BqXanXX/NK6cnkeg4ODSaF2vON45RJo2hK0hgv8yAoLKB3INxoN844woJylU9BWlP4CTV+e3ryccAuyydw9hcKM+clJvVaDVLwAtcpBuewFmnP+jCVlDlLVkgCmQA+D0JCF7e7umhORBSm56HFFpOmYmHH4Nyc+GpTz4RD9PjlsW77TW1tbJg7/SsN89kgAUyhHguWVjhcLHv/cktKRsijN7WAn4W1wafY/NC5jKTYvJ2/evDFnhfn/JOs2lsBnIj42WN1qpFMxomkF/z9lqosLxNrtb7R0CWAWSiG/tdzG/O8W/ipxhxxd+XHzVj6t5K1i0f4kD/25lXlQCrT8EkT8hvEhWP5BjFshrSA56l1jcMrseVrBOjxcXVo82dhxxYsqr2xFWQdzcXCleQ/Y3t4225tzA5jXQH52+Jw+fdqAVYFMkDZcuTtnYhUnqkLceHaRrs6OK17UteXc1XGXEhO/Crz5GcBhGEa+70c8yrmyKsx1dhNQ32plqbP1iiXKWPKVTFR5pNec1Lax9bZcsSmjDTHx2+x5Xmze4WKxuJPNZp/yGKfRSR8V0Mo+TU+Zhusnuair59wett6Wk5etbD58op4n967l5eWZIAh+l81mx+zOuYE+trkF/HU2m/3jx1Z/u952B9odaHeg3YF2B9od+Ig78B9BXoZRBjVExQAAAABJRU5ErkJggg=="
				alt="Feedback"
			/>
			<span>Give feedback</span>
		</ExternalLink>
	</div>
</div>

<style>
	.paragraph {
		@apply space-y-8;
	}
	.sub-paragraph {
		@apply space-y-2;
	}
</style>
